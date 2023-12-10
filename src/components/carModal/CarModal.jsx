import React from "react";

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
  engineSize,
  description,
  accessories,
  rentalPrice,
  rentalCompany,
  functionalities,
  fuelConsumption,
  rentalConditions,
}) => {
  const phoneNumber = "+380730000000";
  const rentalConditionsList = rentalConditions.split("\n");

  return (
    <div className="carModal--container">
      <div className="carModal--subcontainer">
        <div className="carModal--img-info-container">
          <div className="carModal--img-container">
            <button
              className="carModal--close modal--close-btn "
              onClick={() => closeModal(false)}
            >
              <img src={Close} width={24} height={24} alt="Close icon" />
            </button>

            <img className="carModal--img" src={img} alt={make} />
          </div>
          <div className="carModal--details">
            <ul className="carModal--upper-title">
              <li>{make},</li>
              <li className="blue">{model},</li>
              <li>{year}</li>
            </ul>
            <ul className="carModal--upper-list">
              <li>Address: {address} |</li>
              <li>Id: {id} |</li>
              <li>Year: {year} |</li>
              <li>Type: {type} |</li>
              <li>Fuel consumption: {fuelConsumption} |</li>
              <li>Engine size: {engineSize}</li>
            </ul>
            {/*++++++++++++++++++++++++ */}
            <p>{description}</p>
            <p>Accessories and functionalities:</p>
            <ul className="carModal--middle-list">
              {accessories.map((item, index) => (
                <li key={index}>{item} |</li>
              ))}
              {functionalities.map((item, index) => (
                <li key={index}>
                  {item} {index !== functionalities.length - 1 && " |"}
                </li>
              ))}
            </ul>

            <div>
              <p>Rental Conditions:</p>
              <ul className="carModal--under-list">
                {rentalConditionsList.map((item, index) => (
                  <li key={index}>
                    {item.split(" ").map((word, i) => {
                      const isNumber = /^\d+$/.test(word);
                      return (
                        <span
                          key={i}
                          style={{
                            fontWeight: isNumber ? "600" : "inherit",
                            color: isNumber ? "#3470ff" : "inherit",
                          }}
                        >
                          {word}{" "}
                        </span>
                      );
                    })}
                  </li>
                ))}
                <li>
                  Mileage: <span className="blue">{mileage}</span>
                </li>
                <li>
                  Price: <span className="blue">{rentalPrice}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a href={`tel:${phoneNumber}`} className="carModal--r-car-btn main-btn">
        Rental car
      </a>
    </div>
  );
};

export default CarModal;
