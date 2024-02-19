import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Homepage.css";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    console.log(auth)
  },[])
  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  // Your existing code...

  const handlePayment = async () => {
    if (!auth || !auth.user) {
      // alert("Please Login");
      navigate('/login')
      return; // Stop further execution
    }
    else{

    
    console.log("Auth is : ",auth.user.name)
    try {
      setLoading(true);

      const orderData = {
        items: cart.map((item) => ({
          name: item.name,
          quantity: 1,
          price: item.price,
        })),
        username:auth.user.name,
        totalPrice: cart.reduce((total, item) => total + item.price, 0),
      };

      // Include the user's authentication token in the headers
      // const headers = {
      //   Authorization: `Bearer ${auth.token}`,
      // };

      // Make a POST request to create an order with the headers
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/orders/create-orders",
        orderData
        // { headers }
      );

      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      const orderId = data?.order?._id;

      // Redirect to the orders page with the order ID
      // Example navigation using React Router Navigate
      // navigate(`/dashboard/user/orders/${orderId}`, { state: { orderId } });

      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }}
  };

  // Your existing code...

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length
                ? `You Have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : " Your Cart Is Empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {cart?.map((p) => (
              <div className="row mb-2 p-3 card flex-row">
                <div className="col-md-4">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width="100px"
                    height={"100px"}
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    <b>{p.name}</b>
                  </p>
                  <p>{p.description.substring(0, 100)}</p>
                  <p>
                    <b>Price : ₹ {p.price} per Medicine Strip</b>
                  </p>
                  {/* ----------added extra part here [starts]--------------- */}
                  <div class="form-group pb-3">
                    <label for="exampleFormControlSelect1">
                      <b>Add Quantity</b>
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  {/* ----------added extra part here [end]--------------- */}
                  {/* ----------also added extra part here [starts]--------------- */}
                  <div>
                    <button
                      type="button"
                      className="btn btn-success m-2"
                      onClick={handlePayment}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                  {/* ----------also added extra part here [end]--------------- */}
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total : {totalPrice()} </h4>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Plase Login to checkout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;