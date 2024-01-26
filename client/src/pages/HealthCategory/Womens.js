// WomenCategoryPage.js
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WomenCategoryPage = () => {
  const navigate = useNavigate();
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    // Fetch women category products when the component mounts
    getWomenCategoryProducts();
  }, []);

  const getWomenCategoryProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-category/women"
      );
      setWomenProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching women category products:", error);
    }
  };

  return (
    <Layout title={"Womens Health Products - Dawaiwalla"}>
      <div className="container mt-3 category">
        <h1 className="text-center">Women's Health Products</h1>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {womenProducts.map((product) => (
                <div className="card m-2" key={product._id}>
                  <img
                    src={`https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{product.name}</h5>
                      <h5 className="card-title card-price">
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {product.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${product.slug}`)}
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WomenCategoryPage;
