import React from "react";
import { NavLink } from "react-router-dom";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
const FooterNav = () => {
  return (
    <div className="bd-footer py-1 py-md-5 mt-5 bg-body-secondary">
      <div className="container py-1 py-md-5 px-4 px-md-3 font-weight-bold">
        <div className="row p-2">
          {/* logo+about section */}
          <div className="col-lg-3 mb-4">
            <img
              src="/images/dawaiwalla.png"
              className="rounded-5"
              style={{ width: 50, height: 50 }}
              alt="logo"
            />
            <b> DAWAIWALLA</b>
            <p className="mt-3 ">
              We at Bombay-Pills Health Care understand the importance of Health
              in one's life and thus we passionately strive to help patients
              achieve their best health at every stage of their life. Our Our
              Moto is to Enriching Lives for a HEALTHIER And HAPPIER and Mission
              is to provide Cost Effective Products across the Globe
            </p>
          </div>

          {/* Quick Links section */}
          <div className="col-6 col-lg-2 offset-lg-1 mb-4">
            <h5>QUICK LINKS</h5>
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ listStyleType: "circle" }}
            >
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link ">
                  USER LOGIN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link ">
                  REGISTER NEW USER
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/termsandconditions" className="nav-link ">
                  TERMS & CONDITIONS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/policy" className="nav-link ">
                  PRIVACY POLICY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link ">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>

          {/* office Address section */}
          <div className="col-6 col-lg-2 offset-lg-1 mb-4">
            <h5>OFFICE ADDRESS</h5>
            <p className="mt-3">
              <FiMapPin /> :Pawina Bagh, Malad West, Mumbai-400064
            </p>
            <p className="mt-3">
              <BiMailSend /> : bomabypills@gmail.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : 011-99011101
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : +91-9811376874
            </p>
            <p className="mt-3">
              <BiSupport /> : 1800-0000-0000 (toll free Number)
            </p>
          </div>

          {/* social Media section */}
          <div className="col-6 col-lg-2 offset-lg-1 mb-4">
            <h5>SOCIAL MEDIA LINKS</h5>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* facebook link */}
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/dawaiwalla.official"
                  target="_blank"
                  className="link-primary"
                >
                  <img
                    src="/images/facebook_photo.png"
                    style={{
                      width: 28,
                    }}
                    className="rounded-10 m-2"
                    alt="Facebook Icon"
                  />
                  Facebook
                </a>
              </li>

              {/* youtube link */}
              <li className="nav-item">
                <a
                  href="https://www.youtube.com/@dawaiwalla.official"
                  target="_blank"
                  className="link-primary"
                >
                  <img
                    src="/images/youtube_photo.png"
                    style={{
                      width: 30,
                    }}
                    className="rounded-5 m-2"
                    alt="YouTube Icon"
                  />
                  YouTube
                </a>
              </li>

              {/* twitter link */}
              <li className="nav-item">
                <a
                  href="https://www.twitter.com/dawaiwalla.official"
                  target="_blank"
                  className="link-primary"
                >
                  <img
                    src="/images/twitter_photo.png"
                    style={{
                      width: 28,
                    }}
                    className="rounded-10 m-2"
                    alt="Twitter Icon"
                  />
                  Twitter
                </a>
              </li>

              {/* Linkedin link */}
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/dawaiwalla.offical/"
                  target="_blank"
                  className="link-primary"
                >
                  <img
                    src="/images/linkedin_photo.jpg"
                    style={{
                      width: 30,
                    }}
                    className="rounded-5 m-2"
                    alt="Linkedin Icon"
                  />
                  LinkedIn
                </a>
              </li>

              {/* Instagram link */}
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/dawaiwalla.official/"
                  target="_blank"
                  className="link-primary"
                >
                  <img
                    src="/images/instagram_photo.jpg"
                    style={{
                      width: 30,
                    }}
                    className="rounded-5 m-2"
                    alt="Instagram Icon"
                  />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
