import React from "react";
import Layout from "../components/Layout/Layout";

const Termsandconditions = () => {
  const content=`
  
  `
  return (
    <Layout title={"Terms and Conditions - DawaiWalla"}>
      {/* 1st para */}
      <div className="row termsandconditions my-5">
        <div className="col-md-6 ">
          <img
            src="/images/terms_and_conditions.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <h3>TERMS AND CONDITIONS</h3>
            Welcome to www.dawaiwalla.co.in. This Website is owned and operated
            by Bombay-Pills Health Care (Pvt) Ltd.
            <br />
            <br />
            The following are the Terms and Conditions, read together with the
            Privacy Policy, that govern your purchase and use of the products
            and services (the "Products") from www.dawaiwalla.in, and constitute
            a legally binding agreement, between you ("the Customer", the "User"
            or "the Caregiver") and www.dawaiwalla.in.
            <br />
            <br />
            By visiting, viewing, accessing or otherwise using any of the
            services or information created, collected, compiled or submitted to
            www.dawaiwalla.in, you are deemed to have agreed to all the
            following Terms and Conditions of Sale/Service
          </p>
        </div>
      </div>

      <br />
      <hr />

      {/* 2nd para */}
      <div className="mx-5 my-5 px-5 py-5">
        <h4>
          Before you use this Website, please read these Terms carefully as you
          agree to be bound by them :-
        </h4>
        <br />
        <p>
          <h3>1. Creating an Account</h3>
          <b>1.1</b> To use certain features of the Website (e.g. ordering
          Products, posting rating/reviews, receiving ZeelabPharmacy
          newsletters), you must set up an account with www.zeelabpharmacy.com
          ("ZeelabPhamacy Account") and provide certain information about
          yourself as prompted by the Customer Information form, including, your
          name, gender, email address, account password, mobile phone number and
          billing/shipping address. All your registration information is
          protected by our Privacy Policy. <br />
          <br />
          <b>1.2</b> You represent and warrant that the information you submit
          during registration is truthful and accurate and that you will
          maintain the accuracy of such information.
          <br />
          <br />
          <b>1.3</b> Your ZeelabPhamacy Account username and password are
          personal to you. You may not transfer your account and you will be
          responsible for the activities associated with your ZeelabPhamacy
          Account.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h3>2. Privacy Policy</h3>
          <b>2.1</b> Your personally identifiable information will be used in
          accordance with our Privacy Policy. To understand our practices, as to
          how we collect, use and disclose your personally identifiable
          information, please refer our Privacy Policy, which also governs your
          visit to ZeelabPhamacy. <br />
          <br />
          <b>2.2</b> We understand the privacy of all information you provide is
          of a primary importance. This is why we do everything possible to use
          it carefully and sensibly. This information is never shared with other
          companies or third party service providers.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h3>3. Security Policy</h3>
          Your personal information is encrypted by using 256-bit Secure Sockets
          Layer (SSL) encryption technology before being sent over the Internet,
          which ensures the privacy and high level of security of all your
          information. <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h3>4. Price and Payment</h3>
          <b>4.1</b> All our product prices include all applicable statutory
          taxes. <br />
          <br />
          <b>4.2</b> We make every effort to make sure that the pricing and
          availability of Products on our Website is accurate and up to date.
          However, rarely, there may be an error on the pricing of a product or
          an error related to product availability. In such cases, we are not
          responsible for any typographical errors and we reserve the right to
          cancel the sale.
          <br />
          <br />
          <b>4.3</b> We reserve the right to correct any inaccuracies or
          omissions related to pricing and product availability/descriptions,
          even after you have submitted your order, and to change or update any
          other information at any time without prior notice.
          <br />
          <br />
          <b>4.4</b> Delivery times may vary depending on the delivery location
          as well as the type of product you order.
          <br />
          <br />
          <b>4.5</b> You can make the payment by Cash on Delivery or Online
          Payment through Credit Card, Debit Card, Wallets, UPI and Net Banking
          etc.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h3>5. Website Availability</h3>
          We take all reasonable care to ensure the availability of the Website
          24 hours every day, 365 days per year. However, the Website may become
          temporarily unavailable due to maintenance, server or other technical
          issues, or for reasons beyond our control. www.dawaiwalla.in does not
          warrant uninterrupted access to this Website or any linked website.
          However, we may, but shall not be obliged to, issue a notice when we
          know of scheduled maintenance of our Website.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h3>6. Prescription Medication Policy</h3>
          <b>6.1</b> www.dawaiwalla.in takes all precautions to strictly abide
          by the laws and regulations set forth in the dispensing of
          prescription medications. By placing the order for your prescription
          medicines, you acknowledge and accept the following terms regarding
          the purchase of any prescription medicines.
          <br />
          <br />
          <b>6.2</b> www.dawaiwalla.in will not dispense any prescription
          medication without a valid prescription from a licensed physician.
          <br />
          <br />
          <b>6.3</b> If you are ordering prescription medication(s), you hereby
          confirm that you will send us an image/scanned copy of your valid
          prescription(s) via www.dawaiwalla.in and this prescription shall then
          be subject to the scrutiny of and approval by our qualified
          Pharmacist.
          <br />
          <br />
          <b>6.4</b> The drug information provided in the www.dawaiwalla.in is
          for informative purposes only and this Website is not intended to
          provide diagnosis, treatment or medical advice. We are not liable for
          any adverse effects or harm to you as a result of your reliance on the
          information in the Website.
          <br />
          <br />
          <b>6.5</b> Dawaiwalla requires either the User or Customer or the
          Caregiver to confirm he/she is completely aware of the indications,
          side effects, drug interactions, effects of missed dose or overdose of
          the medicines he/she orders from us. It is imperative to seek
          professional advice from your physician before purchasing or consuming
          any medicine from www.dawaiwalla.in.
          <br />
          <br />
          <b>6.6</b> At Dawaiwalla, a Caregiver can order prescription medicines
          on your behalf.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h3>
            7. Copyrights, Trademarks and other Intellectual Property Rights
          </h3>
          <b>7.1</b> As per the Terms and Conditions of www.dawaiwalla.in, the
          Website grants access to Users/Customers to view the content solely
          for visiting, ordering and communicating only. All materials in this
          Website, including, but not limited to, images, illustrations, text,
          logos and page headers, that are part of this Website are copyrights
          and/or other intellectual properties owned by Dawaiwalla.
          <br />
          <br />
          <b>7.2</b> You hereby agree that you will not reproduce, duplicate or
          copy the content of www.dawaiwalla.in for any purpose unless you have
          been specifically permitted to do so in a separate agreement with this
          Website.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h3>8. Changes to these Terms and Conditions</h3>
          We reserve the right to amend these terms and conditions from time to
          time without further notice to you. Any such amendments we make shall
          be effective once we post a revised version of these Terms and
          Conditions on the Website. It is your responsibility to review the
          www.dawaiwalla.in Terms and Conditions regularly. Your continued use
          of the Website following the publication of any such changes will
          constitute your agreement to follow and be automatically bound by the
          amended terms and conditions.
          <br />
          <br />
        </p>
      </div>
    </Layout>
  );
};

export default Termsandconditions;
