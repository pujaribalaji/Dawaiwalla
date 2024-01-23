// this file is used to show the (CALL ON ORDER) feature
import React, { useState } from "react";
import MyModal from "./ShowModal";
import { BiPhoneCall } from "react-icons/bi";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleCloseButton = (
    // className="modal-btn"
    <button type="button" className="btn btn-danger" onClick={closeModal}>
      close
    </button>
  );

  const mainModal = (
    <MyModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
      <h2 className="text-success">
        <b>ORDER ON CALL</b>
      </h2>
      <h3>TIMING</h3>
      <h2 className="text-success">
        <b>10am to 7pm</b>
      </h2>
      <h5>
        <BiPhoneCall /> <b>: +91 9811784368</b>
      </h5>
    </MyModal>
  );

  return (
    <>
      <div>
        <div className="modal-btn" onClick={() => setShowModal(true)}>
          {/* <FiPhoneCall /> */}
          <img
            src="/images/calling.png"
            style={{
              width: 28,
            }}
            className="rounded-4 m-2"
            alt="Call Icon"
          />
          ORDER ON CALL
        </div>
        {showModal && mainModal}
      </div>
    </>
  );
};

export default Modal;
