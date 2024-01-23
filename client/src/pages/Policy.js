import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Dawaiwalla"}>
      {/* 1st para */}
      <div className="jumbotron jumbotron-fluid">
        <img
          src="/images/privacy_policy.jpg"
          className="img-fluid img-thumbnail rounded"
          style={{ width: "100%", height: 300 }}
          alt="img:privacy policy"
        />
      </div>
      {/* actual starts */}

      {/* actual ends */}
      {/* 
      <br />
      <br />
      <br /> */}
      {/* temp starts */}

      {/* temp ends */}

      {/* 2nd para */}
      <div className="mx-5 my-5 px-5 py-5">
        <h3 className="text-center">PRIVACY POLICY</h3>
        <p>
          Bombay Pills Ltd operates the www.dawaiwalla.in, which provides the
          SERVICE’s of sale own product online. This page is used to inform
          website visitors regarding our policies with the collection use and
          disclosure of Personal Information if anyone decided to use our
          Service. If you use our Services, then you are agreed to the
          collection and use of information about this policy. The Personal
          Information that we collect is used for providing and improving the
          Service. We will not use or share any personal information about our
          clients.
        </p>
        <br />
        <hr />
        <br />
        <p>
          <h3>
            Collection of Personally Identifiable Information and other
            Information
          </h3>
          When you use www.dawaiwalla.in, We collect and store your personal
          information which is provided by you from time to time. Our primary
          goal is to provide you a safe, efficient, smooth, and customized
          experience. This allows us to provide services and features that most
          likely meet your needs, and to customize our platform to make your
          experience safer and easier. More importantly, while doing so We may
          collect personal information from you that we consider necessary for
          achieving this purpose.
          <br />
          <br />
          In general, you can browse our website without telling us who you are
          or revealing any personal information about yourself. Once you give us
          your personal information, you are not anonymous to us. Where
          possible, we indicate which fields are required and which fields are
          optional. You always have the option to not provide information by
          choosing not to use a particular service or feature on our platform.
          We may automatically track certain information about you based upon
          your behaviour on our platforms. We use this information to do
          internal research on our users' demographics, interests, and behaviour
          to better understand, protect, and serve our users.
          <br />
          <br />
          This information is compiled and analysed on an aggregated basis. This
          information may include the URL that you just came from (whether this
          URL is on our platform or not), which URL you next go to (whether this
          URL is on our platform or not), your computer browser information, and
          your IP address.
          <br />
          <br />
        </p>
      </div>
      {/* temp starts*/}

      <section className="ptb50" style={{ paddingBottom: "20px" }}>
        <div className="container carousel-wrap bg-light mt-5 pt-3">
          <div className="text-center pb20">
            <h2 className="catHeading uppercase">
              QUALITY &amp; SAFETY ASSURED BEFORE DELIVERY
            </h2>
            <hr style={{ margin: "auto" }} />
            <br />
          </div>
          <div className="row">
            <div className="col-sm">
              <img
                src="images/temperature-controlled-icon.png"
                className="w10"
                alt="Temperature Controlled storage and delivery"
              />
              <h5>
                <b>Temperature Controlled storage and delivery</b>
              </h5>
            </div>
            <div className="col-sm">
              <img
                src="images/regular-sanitization-icon.png"
                className="w10"
                alt="Regular Sanitization"
              />
              <h5>
                <b>Regular Sanitization</b>
              </h5>
            </div>
            <div className="col-sm">
              <img
                src="images/no-contact-delivery-icon.png"
                className="w10"
                alt="No Contact Delivery"
              />
              <h5>
                <b>No Contact Delivery</b>
              </h5>
            </div>
            <div className="col-sm">
              <img
                src="images/secure-packaging-icon.png"
                className="w10"
                alt="Disinfected Packaging"
              />
              <h5>
                <b>Disinfected Packaging</b>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
