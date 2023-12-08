import React from "react";
import Card from "../card/Card";

const CardList = ({ items }) => {
  return (
    <div>
      {items?.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CardList;
