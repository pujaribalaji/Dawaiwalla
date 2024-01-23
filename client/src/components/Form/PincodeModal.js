import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import PincodeCheck from "./PincodeHelper";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PincodeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [pcode, setPcode] = useState("");

  const handleCloseButton = (
    <button className="btn btn-danger" onClick={closeModal}>
      Close
    </button>
  );

  const handleSubmit = async (e) => {
    // console.log("hello Anupam");
    e.preventDefault();
    try {
      // console.log(pcode);  // running
      const { data } = await axios.get(
        `/api/v1/pincode/single-pincode/${pcode}`
      );
      console.log(data.pincode);
      if (data.pincode === null) {
        toast.error("Sorry!!! Product Cannot be Delivered at your Pincode");
      } else {
        toast.success(
          "Congratulations!!! Product can be Delivered at your Pincode"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const mainModal = (
    <PincodeCheck closeModal={closeModal} handleCloseButton={handleCloseButton}>
      {/* form to take input form user about the pincode status */}
      <h3 className="text-success">
        <b>CHECK AVAILABILITY</b>
      </h3>

      <p>Select a delivery Pincode location to see product availability.</p>
      <h6>
        <FiMapPin />
        Enter your Area Pincode
      </h6>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          size="30"
          className="form-control me-2"
          type="search"
          placeholder="Pincode"
          value={pcode}
          onChange={(e) => {
            setPcode(e.target.value);
          }}
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <br></br>
    </PincodeCheck>
  );

  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <button type="button" class="btn btn-light">
          <div
            style={{
              textTransform: "none",
              fontSize: 13,
              fontWeight: 400,
              padding: 0,
              margin: 0,
            }}
          >
            Verify Pincode for Delivery
          </div>
          <div
            style={{
              textTransform: "none",
              fontSize: 15,
              fontWeight: 600,
              padding: 0,
              margin: 0,
            }}
          >
            <FiMapPin />
            Update Location
          </div>
        </button>
      </div>
      {showModal && mainModal}
    </>
  );
};

export default PincodeModal;

// -----------------------------------------------

// import { usePincodeSearch } from "../context/pincodeSearch";
// const Search = () => {
//   const [values, setValues] = usePincodeSearch();
//   return (
//       <div className="container">
//         <div className="text-center">
//           <h1>Search Resuts</h1>
//           <h6>
//             {values?.results.length < 1 ? (
//               <p class="text-success">
//                 "Sorry! Product Unavailable at this Pincode"
//               </p>
//             ) : (
//               <p class="text-danger">"Congratulation! Product is Available"</p>
//             )}
//           </h6>
//         </div>
//       </div>
//   );
// };
