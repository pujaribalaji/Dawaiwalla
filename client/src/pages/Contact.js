import React, { useEffect ,useState} from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import axios from "axios";
const Contact = () => {
  const [content, setContent] = useState(""); // State to hold content

  useEffect(() => {
    // Fetch content from the server
    axios
      .get("http://localhost:8080/api/v1/footer/footer-content/contactUs")
      .then((response) => {
        setContent(response.data.content);
      });
  }, []);

  return (
    <Layout title={"Contact us - Dawaiwalla"}>
      <div id="display" dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
};

export default Contact;
