import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios"; // Import axios for making API requests

const Policy = () => {
  const [content, setContent] = useState(""); // State to hold content

  useEffect(() => {
    // Fetch content from the server
    axios
      .get(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/footer/footer-content/privacyPolicy"
      )
      .then((response) => {
        setContent(response.data.content);
      });
  }, []);

  return (
    <Layout title={"Privacy Policy - Dawaiwalla"}>
      <div id="display" dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
};

export default Policy;
