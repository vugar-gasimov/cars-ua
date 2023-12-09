import React from "react";
import Card from "../card/Card";
import "./cardList.css";
const CardList = ({ items }) => {
  return (
    <div className="card-list--container">
      {items?.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CardList;
