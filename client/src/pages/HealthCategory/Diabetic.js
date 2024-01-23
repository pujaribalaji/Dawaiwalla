// DiabeticCategoryPage.js
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DiabeticCategoryPage = () => {
  const navigate = useNavigate();
  const [DiabeticProducts, setDiabeticProducts] = useState([]);

  useEffect(() => {
    // Fetch Diabetic category products when the component mounts
    getDiabeticCategoryProducts();
  }, []);

  const getDiabeticCategoryProducts = async () => {
    try {
      const { data } = await axios.get(
        "/api/v1/product/product-category/diabetic"
      );
      setDiabeticProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching Diabetic category products:", error);
    }
  };

  return (
    <Layout title={"Diabetic Health Products - Dawaiwalla"}>
      <div className="container mt-3 category">
        <h1 className="text-center">Diabetic's Health Products</h1>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {DiabeticProducts.map((product) => (
                <div className="card m-2" key={product._id}>
                  <img
                    src={`/api/v1/product/product-photo/${product._id}`}
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

export default DiabeticCategoryPage;
