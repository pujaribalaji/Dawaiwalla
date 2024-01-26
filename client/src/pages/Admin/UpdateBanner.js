import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";

const { Option } = Select;

const UpdateBanner = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [altText, setAltText] = useState("");
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState(null);
  const [id, setId] = useState("");

  useEffect(() => {
    const getSingleBanner = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/banner/get-banner/${params.slug}`
        );
        setAltText(data.banner.altText);
        setCaption(data.banner.caption);
        setId(data.banner._id);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleBanner();
  }, [params.slug]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const bannerData = new FormData();
      bannerData.append("altText", altText);
      bannerData.append("caption", caption);
      photo && bannerData.append("photo", photo);

      const { data } = await axios.put(
        `http://localhost:8080/api/v1/banner/update-banner/${id}`,
        bannerData
      );

      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Banner Updated Successfully");
        navigate("/dashboard/admin/bannerslist");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete this banner? "
      );
      if (!answer) return;

      await axios.delete(
        `http://localhost:8080/api/v1/banner/delete-banner/${id}`
      );

      toast.success("Banner Deleted Successfully");
      navigate("/dashboard/admin/bannerslist");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Update Banner"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Banner</h1>
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
              <div className="mb-3 text-center">
                <img
                  src={
                    photo
                      ? URL.createObjectURL(photo)
                      : `http://localhost:8080/api/v1/banner/banner-image/${id}`
                  }
                  alt="banner_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
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
                <textarea
                  type="text"
                  value={caption}
                  placeholder="Enter Caption"
                  className="form-control"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE BANNER
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE BANNER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateBanner;
