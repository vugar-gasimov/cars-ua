import React from "react";
import Symbols from "../icons/Symbols";
import "../../App.css";
import "./carModal.css";
import Close from "../icons/icon-close.svg";
const CarModal = ({
  id,
  img,
  year,
  make,
  type,
  model,
  address,
  mileage,
  closeModal,
  accessories,
  rentalPrice,
  rentalCompany,
  functionalities,
  rentalConditions,
}) => {
  const phoneNumber = "+380730000000";
  const rentalConditionsList = rentalConditions.split("\n");
  return (
    <div className="carModal--container">
      <div className="carModal--subcontainer">
        <div className="carModal--img-info-container">
          <div className="carModal--img-container">
            <Symbols />
            <button
              className="carModal--close modal--close-btn "
              onClick={() => closeModal(false)}
            >
              <svg width={18} height={18}>
                <use xlinkHref={Close} />
              </svg>
            </button>

            <img className="carModal--img" src={img} alt={make} />
          </div>
          <div className="carModal--details">
            <h2 className="carModal--details-title">
              {make}, {year}
            </h2>
            <p className="carModal--details-text">{rentalPrice}</p>
            <p>Accessories and functionalities:</p>
            <ul className="carModal--details-list">
              {accessories.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className="carModal--details-list">
              {functionalities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Rental Conditions:</p>
            <ul>
              {rentalConditionsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              <li>Mileage:{mileage}</li>
              <li>Price:{rentalPrice}</li>
            </ul>
          </div>
        </div>
      </div>
      <a href={`tel:${phoneNumber}`} className="rental--car-button main-btn">
        Rental car
      </a>
    </div>
  );
};

export default CarModal;
