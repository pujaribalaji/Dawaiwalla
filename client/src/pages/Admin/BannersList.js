import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const BannersLists = () => {
  const [banners, setBanners] = useState([]);

  // Get all banners
  const getAllBanners = async () => {
    try {
      const { data } = await axios.get(
        "https://dawaiwalla-backend.onrender.com/api/v1/banner/get-banners"
      );
      setBanners(data.banners);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Delete a banner
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://dawaiwalla-backend.onrender.com/api/v1/banner/delete-banner/${id}`
      );
      toast.success("Banner Deleted Successfully");
      getAllBanners(); // Refresh the banner list after deletion
    } catch (error) {
      console.log(error);
      toast.error("Error Deleting Banner");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllBanners();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Banners List</h1>
          <div className="d-flex flex-wrap">
            {banners?.map((banner, index) => (
              <div key={index} className="banner-link">
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`https://dawaiwalla-backend.onrender.com/api/v1/banner/banner-image/${banner._id}`}
                    className="card-img-top"
                    alt={banner.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{banner.caption}</h5>
                    {/* <p className="card-text">{banner.caption}</p> */}
                    <button
                      onClick={() => handleDelete(banner._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    {/* <Link
                      to={`/dashboard/admin/bannerslist/updatebanner`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BannersLists;
