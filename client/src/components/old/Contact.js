import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us - Dawaiwalla"}>
      {/* 1st para */}
      <div className="jumbotron jumbotron-fluid">
        <img
          src="/images/contactus.png"
          className="img-fluid rounded img-thumbnail"
          style={{ width: "100%", height: 300 }}
          alt="img:privacy policy"
        />
      </div>

      {/* 2nd para */}
      <div className="row contactus mt-5 mb-5">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            className="img-fluid rounded"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center rounded-2">
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            Dawaiwalla.in copowered by BombayPills is incepted with a mission to
            revolutionise the Indian Pharmaceutical Industry by providing World
            Health Organisation Quality Medicines at Affordable Prices.
          </p>
          <p className="mt-3">
            <BiMailSend /> : bomabypills@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 011-99011101
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
