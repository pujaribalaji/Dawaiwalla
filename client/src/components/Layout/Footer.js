import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">
        &copy; Copyright By dawaiwalla.in All Rights Reserved
      </h3>
      <p className="text-center mt-3">
        <Link to="/termsandconditions">Terms and conditions</Link>|
        <Link to="/policy">Privacy Policy</Link>|<Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>
      </p>
      <div className="text-center">
        <img
          src="/images/payment_image.png"
          className="img-fluid"
          style={{ width: 300, height: 25 }}
        />
      </div>
    </div>
  );
};

export default Footer;
