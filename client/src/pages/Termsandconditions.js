import React, { useEffect ,useState} from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";

const Termsandconditions = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    // Fetch content from the server
    axios
      .get("http://localhost:8080/api/v1/footer/footer-content/termsConditions")
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
