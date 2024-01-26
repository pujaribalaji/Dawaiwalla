import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import { Collapse } from "antd";
const { Panel } = Collapse;

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [banners, setBanners] = useState([]);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch banners from the server
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/banner/get-banners"
        );
        console.log("Banners API response:", response);
        if (response.data?.success) {
          setBanners(response.data?.banners);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  const navigateToBonesCategory = () => {
    navigate("/HealthCategory/bones&joints");
  };

  const navigateToWomenCategory = () => {
    navigate("/HealthCategory/women");
  };

  const navigateToDiabeticCategory = () => {
    navigate("/HealthCategory/diabetic");
  };
  const navigateToHairCategory = () => {
    navigate("/HealthCategory/hair");
  };
  const navigateToEyesCategory = () => {
    navigate("/HealthCategory/Eye-ear");
  };
  const navigateToStomachCategory = () => {
    navigate("/HealthCategory/stomach");
  };

  return (
    <Layout title={"Medicines - Best offers - Dawaiwalla"}>
      {/* movable Advertisement Banner section */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div id="myCarousel-indicators" className="carousel-indicators">
          {banners.map((_banner, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {banners?.map((banner, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={10000}
            >
              <img
                src={`https://dawaiwalla-backend-2pc2.onrender.com/api/v1/banner/banner-image/${banner._id}`}
                className="d-block w-100 img-thumbnail"
                alt={banner.altText}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{banner.caption}</h5>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      {/* PROMOTION LINE (i)*/}
      <div className=" mt-5 bg-body-secondary">
        <div className="container px-4 text-body-secondary">
          <p class="fs-4 text-center">
            DAWAIWALLA : India’s Most Affordable Online Medicine Store
          </p>
        </div>
      </div>

      {/* shop by health category */}
      <section className="ptb50  small" style={{ paddingBottom: "20px" }}>
        <div className="container carousel-wrap iconCarousel bg-light mt-5 pt-3">
          <div className="text-center pb20">
            <h2 className="catHeading uppercase">SHOP BY HEALTH CATEGORIES</h2>
            <hr style={{ margin: "auto" }} />
            <br />
          </div>
          <div className="row small home-page">
            <div className="col-sm text-center">
              <a
                onClick={navigateToBonesCategory}
                className="text-decoration-none"
              >
                <div>
                  <img
                    src="images/bone-&-joints-icon.png"
                    className="w100 rounded-circle"
                    alt="Bone & Joints"
                  />
                  <h5 className="mtb15 lead">
                    <b>Bone &amp; Joints</b>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-sm  text-center">
              <a
                onClick={navigateToDiabeticCategory}
                className="text-decoration-none"
              >
                <div>
                  <img
                    src="images/diabetic.png"
                    className="w100 rounded-circle"
                    alt="diabetic"
                  />
                  <h5 className=" mtb15 lead">
                    <b>Diabetic</b>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-sm  text-center">
              <a
                onClick={navigateToEyesCategory}
                className="text-decoration-none"
              >
                <div>
                  <img
                    src="images/eye-&-ears.png"
                    className="w100 rounded-circle"
                    alt="Bone & Joints"
                  />
                  <h5 className=" mtb15 lead">
                    <b>Eyes & Ears</b>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-sm  text-center">
              <a
                onClick={navigateToHairCategory}
                className="text-decoration-none"
              >
                <div>
                  <img
                    src="images/hair.png"
                    className="w100 rounded-circle"
                    alt="Hair"
                  />
                  <h5 className=" mtb15 lead">
                    <b>Hair</b>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-sm  text-center">
              <a
                onClick={navigateToStomachCategory}
                className="text-decoration-none"
              >
                <div>
                  <img
                    src="images/stomach.png"
                    className="w100 rounded-circle"
                    alt="stomach"
                  />
                  <h5 className=" mtb15 lead">
                    <b>Stomach</b>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-sm  text-center">
              <a
                onClick={navigateToWomenCategory}
                className="text-decoration-none"
              >
                <div>
                  <img
                    src="images/women.png"
                    className="w100 rounded-circle"
                    alt="women"
                  />
                  <h5 className=" mtb15 lead">
                    <b>Women</b>
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />

      {/* (Filter + All Products) section  */}
      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Filter By Category" key="1">
              {/* Filter section */}
              <div className="d-flex flex-column">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>
            </Panel>
            <Collapse defaultActiveKey={["2"]}>
              <Panel header="Filter By Price" key="2">
                {/* price filter */}
                <div className="d-flex flex-column">
                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {Prices?.map((p) => (
                      <div key={p._id}>
                        <Radio value={p.array}>{p.name}</Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </div>
              </Panel>
            </Collapse>
          </Collapse>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>

        {/* All Products Section */}
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex justify-content-center gap-5 flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`https://dawaiwalla-backend-2pc2.onrender.com/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })}{" "}
                    </h5>
                  </div>
                  <p className="card-text">
                    {p.description.substring(0, 50)}...
                  </p>
                  <p>₹ {p.price} per medicine strip</p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      <br />

      {/* Quality & safety Assured section */}
      <section className="ptb50" style={{ paddingBottom: "20px" }}>
        <div className="container carousel-wrap iconCarousel bg-light mt-5 pt-3">
          <div className="text-center pb20">
            <h2 className="catHeading uppercase">
              QUALITY &amp; SAFETY ASSURED BEFORE DELIVERY
            </h2>
            <hr style={{ margin: "auto" }} />
            <br />
          </div>
          <div className="row">
            <div className="col-sm text-center mb-3">
              <img
                src="images/temperature-controlled-icon.png"
                className="w10"
                alt="Temperature Controlled storage and delivery"
              />
              <h5>
                <b>Temperature Controlled storage and delivery</b>
              </h5>
            </div>
            <div className="col-sm text-center mb-3">
              <img
                src="images/regular-sanitization-icon.png"
                className="w10"
                alt="Regular Sanitization"
              />
              <h5>
                <b>Regular Sanitization</b>
              </h5>
            </div>
            <div className="col-sm text-center mb-3">
              <img
                src="images/no-contact-delivery-icon.png"
                className="w10"
                alt="No Contact Delivery"
              />
              <h5>
                <b>No Contact Delivery</b>
              </h5>
            </div>
            <div className="col-sm text-center mb-3">
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
      <br />
      <br />
      <hr />
      {/* extra info section */}
      <div className="mx-5 my-3 px-5 py-3 ">
        <h3>
          Stay Healthy with BOMBAY PILLS Pharmacy: Govt. Certified Affordable
          Generic Medicine
        </h3>
        <br />
        <p>
          We are a purpose driven business on a mission to end the
          unaffordability in the healthcare sector of India. We have saved over
          70 crore INR of patients through 1000 pharmacies, 5 doctors and a
          passionate team of 300 people.
        </p>
        <br />
        <p>
          <h4>Why choose BOMBAY PILLS Pharmacy?</h4>
          We at Bombay Pills Pharmacy are on a mission to revolutionise the
          Indian Pharmaceutical Industry by providing World Health Organization
          Quality Medicines at Affordable Prices. The main focus of Bombay Pills
          Pharmacy is to provide you with lower price medicine to its consumers
          while maintaining its quality standards. Through our extensive network
          of pharmacies, we are able to get vital medicine delivered at your
          place across the country. Our team of highly experienced pharmacists
          and healthcare professionals help you buy generic medicines online at
          affordable prices.
          <br />
          <br />
        </p>
      </div>
      {/* offers section */}
      {/* <div className="bs-info-border-subtle py-1 py-md-5 mt-5">
        <div className="container  py-1 py-md-5 px-4 px-md-3">
          <div className="text center ">QUALITY & SAFETY ASSURED SECTION</div>
        </div>
      </div> */}

      <br />
      <hr />

      {/* PROMOTION LINE (ii)*/}
      <div className=" mt-5 mb-5">
        <p
          className="fs-4 text-center font-weight-bold"
          style={{ fontWeight: 700 }}
        >
          INDIA’S LARGEST GENERIC MEDICINE ONLINE STORE
        </p>
        <div
          className="d-flex justify-content-around"
          style={{ fontSize: 15, fontWeight: 800 }}
        >
          <div>
            <h3 className="text-center">3M+</h3> Visitors
          </div>
          <div>
            <h3 className="text-center">1M+</h3> Customers
          </div>
          <div>
            <h3 className="text-center">1 Lakh+</h3> Orders Delivered
          </div>
          <div>
            <h3 className="text-center">100+</h3> Cities
          </div>
        </div>
      </div>

      <br />
      {/* PROMOTION LINE (iii)*/}
      <div className="jumbotron jumbotron-fluid mt-4 mb-4 pt-4 pb-4">
        <img
          src="/images/move_banner5.jpg"
          className="img-fluid rounded img-thumbnail"
          style={{ width: "100%", height: 300 }}
          alt="img:offer"
        />
      </div>

      <br />
      <hr />
      {/* INFO*/}
      <div className="mx-5 my-3 px-5 py-3">
        <h3>
          Stay Healthy with BOMBAY PILLS Pharmacy: Govt. Certified Affordable
          Generic Medicine
        </h3>
        <br />
        <p>
          We are a purpose driven business on a mission to end the
          unaffordability in the healthcare sector of India. We have saved over
          70 crore INR of patients through 1000 pharmacies, 5 doctors and a
          passionate team of 300 people.
        </p>
        <br />
        <p>
          <h4>Why choose BOMBAY PILLS Pharmacy?</h4>
          We at Bombay Pills Pharmacy are on a mission to revolutionise the
          Indian Pharmaceutical Industry by providing World Health Organization
          Quality Medicines at Affordable Prices. The main focus of Bombay Pills
          Pharmacy is to provide you with lower price medicine to its consumers
          while maintaining its quality standards. Through our extensive network
          of pharmacies, we are able to get vital medicine delivered at your
          place across the country. Our team of highly experienced pharmacists
          and healthcare professionals help you buy generic medicines online at
          affordable prices.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h4>Your one-stop Pharmacy to Buy Generic Medicines Online</h4>
          Bombay Pills Pharmacy was incepted to provide you with affordable
          quality medicine through its dedicated sales outlets along with online
          medicine delivery across the country. Bombay Pills Pharmacy makes sure
          that the entire process of online medicine delivery is completed in
          the shortest time possible as sometimes the medicines are needed on an
          urgent basis. It is proposed that more than 1 lakh Bombay Pills
          Pharmacy outlets will be opened in the country within five years of
          its launch.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h4>
            Save Up to 90% on your Medicines with BOMBAY PILLS Pharmacy
            (www.dawaiwalla.in)
          </h4>
          Now you can save up to 90% on your medicine bills by purchasing lower
          price medicine through Bombay Pills Pharmacy’s online medical store
          nearby without compromising on the quality. This initiative taken up
          by Bombay Pills Pharmacy will benefit you by reducing your healthcare
          budget and minimising the overall cost of your medical treatment.{" "}
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h4>The Most Trusted Online Medical Store Nearby You</h4>
          At Bombay Pills Pharmacy we ensure that you only buy high-quality
          generic medicines through our online medical stores near you. Although
          other medicines in the market are sold to you at significantly higher
          prices than their generic equivalents which are identical in their
          therapeutic value, we at Bombay Pills Pharmacy make sure that you buy
          generic medicines online at affordable prices. All our medicines and
          healthcare products are manufactured at WHO-GMP certified plants.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h4>Fastest Online Medicine Delivery at your Home</h4>
          Bombay Pills Pharmacy specializes in providing you with affordable
          medicines online at the comfort of your home. This saves you all the
          hassles of stepping-out of your home, visiting a pharmacy and waiting
          in the queue to buy the prescribed medicine. We at Bombay Pills
          Pharmacy understand that sometimes you need medicines on an
          urgent-basis and that is the reason why we ensure that you receive
          your medication at the earliest possible.
          <br />
          <br />
        </p>

        {/* ---------------------- */}

        <p>
          <h4>
            What makes BOMBAY PILLS the most preferred Online Pharmacy in India?
          </h4>
          Bombay Pills Pharmacy truly believes that to receive affordable
          generic medicines of highest quality standard is the right of each and
          every citizen of India. Therefore, we make sure that your experience
          of buying generic medicine online is completely hassle-free. And not
          to forget the discounts and exclusive offers we bring to you from time
          to time. Visit our online medical store now and avail online generic
          medicine purchase at your home.
          <br />
          <br />
        </p>
      </div>

      <hr />
      <br />
    </Layout>
  );
};

export default HomePage;
