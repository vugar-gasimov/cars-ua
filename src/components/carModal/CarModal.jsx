import React from "react";
import Symbols from "../icons/Symbols";

const CarModal = ({
  id,
  img,
  year,
  make,
  type,
  model,
  liked,
  address,
  rentalPrice,
  rentalCompany,
  functionalities,
  closeModal,
}) => {
  const phoneNumber = "+380730000000";
  return (
    <div className="carModal--container">
      <div className="carModal--subcontainer">
        <div className="carModal--img-container">
          <Symbols />
          <button
            className="carModal--close modal--close-btn "
            onClick={() => closeModal(false)}
          >
            {liked ? (
              <svg width={18} height={18}>
                <use xlinkHref="#icon-active" />
              </svg>
            ) : (
              <svg width={18} height={18}>
                <use xlinkHref="#icon-normal" />
              </svg>
            )}
          </button>

          <img className="carModal--img" src={img} alt={make} />
        </div>
        <div className="carModal--details">
          <h2 className="carModal--details-title">
            {make}, {year}
          </h2>
          <p className="carModal--details-text">{rentalPrice}</p>
        </div>
        <ul className="carModal--details-list">
          <li>{address} |</li>
          <li>{rentalCompany} |</li>
          <li>{type} |</li>
          <li>{id} |</li>
          <li>{model} |</li>
          <li>{functionalities[0]} </li>
        </ul>
      </div>
      <a href={`tel:${phoneNumber}`} className="rental-car-button">
        Learn more
      </a>
    </div>
  );
};

export default CarModal;
