import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";

const About = () => {
  const [content, setContent] = useState(""); // State to hold content

  useEffect(() => {
    // Fetch content from the server
    axios
      .get(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/footer/footer-content/aboutUs"
      )
      .then((response) => {
        setContent(response.data.content);
      });
  }, []);

  return (
    <Layout title={"About Us - Dawaiwalla"}>
      <div id="display" dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
};
export default About;
