import React from "react";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const {
    id,
    img,
    make,
    type,
    model,
    liked,
    address,
    rentalPrice,
    rentalCompany,
    functionalities,
  } = props;

  const dispatch = useDispatch();

  const handleLikeClick = () => {
    // Dispatch an action to handle the like functionality
    // Example: dispatch(likeCar(id));
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={make} width={200} />
      </div>
      <div className="card-details">
        <h2>{make}</h2>
        <p>Model: {model}</p>
        <p>Type: {type}</p>
        <p>Rental Price: {rentalPrice}</p>
        {/* Add more details as needed */}
      </div>
      <div className="card-actions">
        <button onClick={handleLikeClick}>{liked ? "Unlike" : "Like"}</button>
        {/* Add more actions/buttons */}
      </div>
    </div>
  );
};

export default Card;
