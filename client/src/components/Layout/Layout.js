import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FooterNav from "./FooterNav";
import Modal from "./Modal";
// import PincodeModal from "../Form/PincodeModal";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      {/* <PincodeModal /> */}
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <FooterNav />
      <Footer />
      <Modal />
    </div>
  );
};

Layout.defaultProps = {
  title: "Dawaiwalla - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "AR-makers",
};

export default Layout;
