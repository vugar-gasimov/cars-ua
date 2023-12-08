import React from "react";
import { useDispatch } from "react-redux";
import { updateLikeStatus } from "../../redux/cars-ua/operations";

const Card = (props) => {
  const {
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
  } = props;

  const dispatch = useDispatch();
  // const handleLikeClick = () => {
  //   dispatch({ type: "TOGGLE_LIKE", payload: { id, liked: !liked } });
  // };
  const handleLikeClick = (carId) => {
    const likedcars = {
      id,
      liked: !liked,
    };
    dispatch(updateLikeStatus(likedcars));
  };
  return (
    <div className="card">
      <div className="card-image">
        <div className="card-actions">
          <button onClick={handleLikeClick}>{liked ? "Unlike" : "Like"}</button>
        </div>
        <img src={img} alt={make} width={200} />
      </div>
      <div className="card-details">
        <h2>{make}</h2>
        <h2>
          {model}, {year}
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <ul className="card-list">
        <li className="card-list-item">{address}</li>
        <li className="card-list-item">{rentalCompany}</li>
        <li className="card-list-item">{type}</li>
        <li className="card-list-item">{id}</li>
        <li className="card-list-item">{model}</li>
        <li className="card-list-item">{functionalities[0]}</li>
      </ul>
    </div>
  );
};

export default Card;
