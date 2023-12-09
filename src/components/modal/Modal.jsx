import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import "./modal.css";
const rootModal = document.querySelector("#modal");

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleModalCloseKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleModalCloseKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleModalCloseKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal]);

  const handleModalClose = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return ReactDOM.createPortal(
    <div className="modal--backdrop" onClick={handleModalClose}>
      <div>{children}</div>
    </div>,
    rootModal
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};
