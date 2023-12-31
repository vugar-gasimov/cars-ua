import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLikeStatus } from '../../redux/cars-ua/operations';
import '../../App.css';
import './card.css';
import Symbols from '../icons/Symbols';
import Modal from '../modal/Modal';
import CarModal from '../carModal/CarModal';
const Card = props => {
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
  const [modalMore, setModalMore] = useState(false);
  const [likedState, setLikedState] = useState(props.liked);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    const likedCars = {
      id,
      liked: !liked,
    };
    dispatch(updateLikeStatus(likedCars));
    setLikedState(!likedState);
  };
  return (
    <div>
      <div className="card--container">
        <div className="card--img-container">
          <Symbols />
          <button className="card--heart " onClick={handleLikeClick}>
            {likedState ? (
              <svg width={18} height={18}>
                <use xlinkHref="#icon-active" />
              </svg>
            ) : (
              <svg width={18} height={18}>
                <use xlinkHref="#icon-normal" />
              </svg>
            )}
          </button>
          <img className="card--img" src={img} alt={make} />
        </div>
        <div className="card-details">
          <ul className="card--details-title ">
            <li>{make},</li>
            <li className="blue">{model},</li>
            <li>{year}</li>
          </ul>
          <p className="card--details-text">{rentalPrice}</p>
        </div>
        <ul className="card--details-list">
          <li>{address} |</li>
          <li>{rentalCompany} |</li>
          <li>{type} |</li>
          <li>{id} |</li>
          <li>{model} |</li>
          <li>{functionalities[0]} </li>
        </ul>
      </div>
      <button className="main-btn-long" onClick={setModalMore}>
        Learn more
      </button>
      {modalMore && (
        <Modal closeModal={() => setModalMore(false)}>
          <CarModal closeModal={setModalMore} {...props} />
        </Modal>
      )}
    </div>
  );
};

export default Card;
