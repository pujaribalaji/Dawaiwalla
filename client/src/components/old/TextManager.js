import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";

const TextManager = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch content from the database
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/footer/footer-content"
        );
        const fetchedContent = response.data.content || "";
        setContent(fetchedContent);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch content");
      }
    };

    fetchContent();
  }, []);

  const handleUpdateContent = async () => {
    try {
      // Update content in the database
      await axios.post("http://localhost:8080/api/v1/footer/footer-content", {
        content,
      });

      toast.success("Content updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update content");
    }
  };

  return (
    <Layout title={"Text Manager - Dawaiwalla"}>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Text Manager</h2>
        <textarea
          className="form-control"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleUpdateContent}>
            Update Content
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TextManager;