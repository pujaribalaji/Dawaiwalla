import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";

const Termsandconditions = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    // Fetch content from the server
    axios
      .get(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/footer/footer-content/termsConditions"
      )
      .then((response) => {
        setContent(response.data.content);
      });
  }, []);

  return (
    <Layout title={"Terms and Conditions - Dawaiwalla"}>
      <div id="display" dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
};

export default Termsandconditions;
