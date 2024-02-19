// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";

const TextManager = () => {
  const [contents, setContents] = useState({
    privacyPolicy: "",
    termsConditions: "",
    contactUs: "",
    aboutUs: "", // New section for About Us
  });

  useEffect(() => {
    // Fetch content for each content type
    const fetchContent = async (contentType) => {
      try {
        const response = await axios.get(
          `https://dawaiwalla-backend-2pc2.onrender.com/api/v1/footer/footer-content/${contentType}`
        );

        const fetchedContent = response.data.content || "";
        setContents((prevContents) => ({
          ...prevContents,
          [contentType]: fetchedContent,
        }));
      } catch (error) {
        console.error(error);
        toast.error(`Failed to fetch ${contentType} content`);
      }
    };

    fetchContent("privacyPolicy");
    fetchContent("termsConditions");
    fetchContent("contactUs");
    fetchContent("aboutUs"); // Fetch About Us content
  }, []);

  const handleUpdateContent = async (contentType) => {
    try {
      // Update content in the database for the specified content type
      await axios.post(
        `https://dawaiwalla-backend-2pc2.onrender.com/api/v1/footer/footer-content`,
        {
          contentType,
          content: contents[contentType],
        }
      );

      toast.success(`${contentType} content updated successfully`);
    } catch (error) {
      console.error(error);
      toast.error(`Failed to update ${contentType} content`);
    }
  };

  return (
    <Layout title={"Text Manager - Dawaiwalla"}>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Text Manager</h2>

        {/* Privacy */}
        <textarea
          className="form-control"
          rows="20"
          value={contents.privacyPolicy}
          onChange={(e) =>
            setContents((prevContents) => ({
              ...prevContents,
              privacyPolicy: e.target.value,
            }))
          }
        ></textarea>
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleUpdateContent("privacyPolicy")}
          >
            Update Privacy Content
          </button>
        </div>

        {/* Terms and Conditions */}
        <textarea
          className="form-control mt-4"
          rows="20"
          value={contents.termsConditions}
          onChange={(e) =>
            setContents((prevContents) => ({
              ...prevContents,
              termsConditions: e.target.value,
            }))
          }
        ></textarea>
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleUpdateContent("termsConditions")}
          >
            Update Terms and Conditions Content
          </button>
        </div>

        {/* Contact Us */}
        <textarea
          className="form-control mt-4"
          rows="20"
          value={contents.contactUs}
          onChange={(e) =>
            setContents((prevContents) => ({
              ...prevContents,
              contactUs: e.target.value,
            }))
          }
        ></textarea>
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleUpdateContent("contactUs")}
          >
            Update Contact Us Content
          </button>
        </div>

        {/* About Us */}
        <textarea
          className="form-control mt-4"
          rows="20"
          value={contents.aboutUs}
          onChange={(e) =>
            setContents((prevContents) => ({
              ...prevContents,
              aboutUs: e.target.value,
            }))
          }
        ></textarea>
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleUpdateContent("aboutUs")}
          >
            Update About Us Content
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TextManager;
