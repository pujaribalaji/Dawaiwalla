import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CategoryProductStyles.css";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState([]);
  const [auth] = useAuth();
  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-9 offset-1" style={{ margin: "auto" }}>
            <div className="home-page">
              <div className="product-display-area-container">
                {products?.map((p) => (
                  <div className="card m-2" key={p._id}>
                    <img
                      src={`https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      onClick={() => navigate(`/product/${p.slug}`)}
                    />
                    <div className="card-body">
                      <div onClick={() => navigate(`/product/${p.slug}`)}>
                        <div className="card-name-price">
                          <h5 className="card-title">{p.name}</h5>
                          <h5 className="card-title card-price">
                            {p.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "INR",
                            })}{" "}
                          </h5>
                        </div>
                        <p className="card-text">
                          {p.description.substring(0, 50)}...
                        </p>
                        <p className="card-desc">
                          ₹ {p.price} per medicine strip
                        </p>
                      </div>
                      <div className="card-name-price">
                        {/* <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button> */}
                        {auth.user && auth.user.role == 1 ? (
                          ""
                        ) : (
                          <button
                            className="btn btn-dark ms-1"
                            style={{ zIndex: 50 }}
                            onClick={() => {
                              setCart([...cart, p]);
                              localStorage.setItem(
                                "cart",
                                JSON.stringify([...cart, p])
                              );
                              toast.success("Item Added to cart");
                            }}
                          >
                            ADD TO CART
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
