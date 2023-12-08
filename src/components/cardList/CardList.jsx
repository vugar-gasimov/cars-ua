import React from "react";
import Card from "../card/Card";

const CardList = ({ cars }) => {
  return (
    <div>
      {cars?.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CardList;
