import React from "react";
import Filter from "../../components/filters/Filter";
import { selectCars, selectLikedCars } from "../../redux/cars-ua/selectors";
import { useSelector } from "react-redux";
import CardList from "../../components/cardList/CardList";

const Favorites = () => {
  const cars = useSelector(selectCars);
  const likedCars = cars.filter((car) => car.liked === true);

  return (
    <main>
      <Filter />
      <div>
        <CardList cars={likedCars} />
      </div>
    </main>
  );
};

export default Favorites;
