import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Banners = () => {
  const navigate = useNavigate();
  const [altText, setAltText] = useState("");
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState("");

  // create banner function
  // create banner function
  const handleCreateBanner = async (e) => {
    e.preventDefault();

    try {
      // Validate banner dimensions
      if (photo) {
        const image = new Image();
        image.src = URL.createObjectURL(photo);

        image.onload = function () {
          if (image.width !== 1920 || image.height !== 450) {
            toast.error("Banner dimensions must be 1920px x 450px");
            return;
          }

          const bannerData = new FormData();
          bannerData.append("altText", altText);
          bannerData.append("caption", caption);
          bannerData.append("photo", photo);

          axios
            .post(
              "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/banner/create-banner",
              bannerData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then(({ data }) => {
              if (data?.success) {
                toast.success(data?.message);
                navigate("/");
              } else {
                toast.error("Failed to create banner");
              }
            })
            .catch((error) => {
              console.log(error);
              toast.error("Something went wrong");
            });
        };
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Banner"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Banner</h1>
            <div className="m-1 w-75">
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="banner_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={altText}
                  placeholder="Enter Alt Text"
                  className="form-control"
                  onChange={(e) => setAltText(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={caption}
                  placeholder="Enter Caption"
                  className="form-control"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary"
                  onClick={handleCreateBanner}
                >
                  CREATE BANNER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Banners;
