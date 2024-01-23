import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Dawaiwalla"}>
      {/* 1st para */}
      <div className="jumbotron jumbotron-fluid">
        <img
          src="/images/aboutus_banner.jpg"
          className="img-fluid rounded img-thumbnail"
          style={{ width: "100%", height: 300 }}
          alt="img:about us"
        />
      </div>

      {/* 2nd para */}
      <div className="py-4 bg-body-primary">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="text-center">
            <h4>A Tradition of Innovation Since 2023 </h4>
            <p>
              Bombay-Pills Health Care is a fast growing Pharmaceutical company
              driven by young entrepreneurial minds.
            </p>
            <h4>Headquartered in Mumbai, India</h4>
            <p>
              We at Bombay-Pills Health Care understand the importance of Health
              in one's life and thus we passionately strive to help patients
              achieve their best health at every stage of their life.
            </p>
            <br />
            <p>
              Bombay-Pills Health Care is in the process of becoming one of the
              most trusted names in the Pharmaceutical business. We have set the
              highest quality standards in our product offerings and pride
              ourselves with a consistent and reliable supply chain, ensuring
              market compliance & timely delivery. Bombay-Pills Health Care's
              entry in the formulation business, is because of its deep
              understanding of market and patient needs. We believe in doing
              business with a high sense of integrity and in creating shared
              value for stakeholders at all levels; including patients,
              distributors, stockists, retailers, field force and the overall
              society.
            </p>

            <br />
            <p>
              Our aim is to improve patients' lives by identifying and
              commercializing meaningful products that address unmet medical
              needs, thereby "Nurturing quality of life". As part of our
              unwavering commitment towards our mission, we are continuing to
              expand our commercial product portfolio & deepen penetration in
              the Indian pharmaceutical market.
            </p>
          </div>

          {/* MISSION STATMENT */}
          <div className="py-3 bg-body-primary">
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
              {/* 2nd para */}
              <div className="text-center">
                <h3>MISSION STATEMENT</h3>
                <p>
                  <b>
                    We provide Cost Effective, Innovation based Superior Quality
                    Pharmaceutical Products across the Globe that improve the
                    lives of the Patients.
                  </b>
                </p>
              </div>
            </div>
          </div>

          {/* VISION STATMENT */}
          <div className="bg-body-primary">
            <div className="container py-3 py-md-5 px-4 px-md-3 text-body-secondary">
              {/* 2nd para */}
              <div className="text-center">
                <h3>VISION STATEMENT</h3>
                <p>
                  <b>
                    To be a Global Pharmaceutical Company, Most Admired for its
                    affordability, Quality and Accessibility of Products.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd para */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <img
              src="/images/founder.jpg"
              alt="aboutus"
              className="img-fluid rounded"
              style={{ width: 500, height: 350 }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="bg-dark p-2 text-center text-white rounded-2">
              FOUNDER
            </h2>
            <p className="text-justify mt-2">
              Founder of Bombay Pills Private Ltd. was founded on 13th April,
              2023 by Mr archit gupta at the young age of 22 years old. He
              inherits lineage of over 30 years of pharmaceutical experience. A
              Master of Management from the prestigious London School of
              Economics with Distinction and a Bachelor of Laws (LLB hons) from
              the University of Southampton, he aims to revolutionise
              affordability in the pharmaceutical sector of India, which he
              states is ‘inherently flawed’.
            </p>
            <p>
              We are a purpose driven business on a mission to end
              unaffordability in the healthcare sector of India. We have saved
              over 70 crore INR of patients through 1000 pharmacies, 5 doctors
              and a passionate team of 300 people.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

<div className="bd-footer py-4 py-md-5 mt-5 bg-body-secondary">
  <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
    <div className="row">
      {/* about section */}
      <div className="col lg-3 mb-3">
        <img
          src="/images/dawaiwalla.png"
          className="rounded-5"
          style={{ width: 50, height: 50 }}
          alt="logo"
        />
        <b> DAWAIWALLA</b>
        <p>
          We at Bombay-Pills Health Care understand the importance of Health in
          one's life and thus we passionately strive to help patients achieve
          their best health at every stage of their life.
        </p>
      </div>

      {/* Quick Link section */}
      <div></div>

      {/* Office Address section */}
      <div></div>

      {/* social media links section */}
      <div></div>
    </div>
  </div>
</div>;
