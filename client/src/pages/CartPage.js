import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Homepage.css";
import toast from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState({}); // State to hold quantities for each product

  useEffect(() => {
    console.log(auth);
  }, []);

  useEffect(() => {
    // Initialize quantities based on the current cart
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item._id] = 1; // Set initial quantity to 1 for each product
    });
    setQuantities(initialQuantities);
  }, [cart]);

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total += item.price * quantities[item._id]; // Multiply price by quantity
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update quantity for a product
  const handleQuantityChange = (pid, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [pid]: quantity,
    }));
  };

  //detele item
  const removeCartItem = (pid) => {
    try {
      const updatedCart = cart.filter((item) => item._id !== pid);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.log(error);
    }
  };

  // Handle payment submission
  const handlePayment2 = async () => {
    if (!auth || !auth.user) {
      navigate("/login");
      return; // Stop further execution
    }

    try {
      setLoading(true);

      const orderData = {
        items: cart.map((item) => ({
          name: item.name,
          quantity: quantities[item._id], // Use the updated quantity
          price: item.price,
        })),
        username: auth.user.name,
        totalPrice: totalPrice(), // Calculate the total price based on updated quantities
      };

      // Make a POST request to create an order with the order data
      const { data } = await axios.post(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/orders/create-orders",
        orderData
      );

      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      const orderId = data?.order?._id;

      toast.success("Payment Completed Successfully ");
      navigate("/dashboard/user/orders");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {cart?.map((p) => (
              <div className="row mb-2 p-3 card flex-row" key={p._id}>
                <div className="col-md-4">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    <b>{p.name}</b>
                  </p>
                  <p>{p.description.substring(0, 100)}</p>
                  <p>
                    <b>
                      Price : ₹ {p.price * quantities[p._id]} per Medicine Strip
                    </b>
                  </p>
                  {/* ----------added extra part here [starts]--------------- */}
                  <div className="form-group pb-3">
                    <label htmlFor={`quantity_${p._id}`}>
                      <b>Add Quantity</b>
                    </label>
                    <select
                      className="form-control"
                      id={`quantity_${p._id}`}
                      value={quantities[p._id]}
                      onChange={(e) =>
                        handleQuantityChange(p._id, parseInt(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* ----------added extra part here [end]--------------- */}
                  {/* ----------also added extra part here [starts]--------------- */}
                  <div>
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
            <div>
              <button
                type="button"
                className="btn btn-success m-2"
                onClick={handlePayment2}
              >
                Submit
              </button>
              <button
                className="btn btn-warning"
                onClick={() => navigate("/dashboard/user/profile")}
              >
                Update Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
