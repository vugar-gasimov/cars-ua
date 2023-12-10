import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars-ua/selectors";
import { makes, priceOptions } from "../../components/data/Data";
import Filter from "../../components/filters/Filter";
import CardList from "../../components/cardList/CardList";
import {
  filterByPrice,
  filterByMileage,
} from "../../components/filters/FilterLogic";
const Favorites = () => {
  const allCars = useSelector(selectCars);
  const [selectMake, setSelectMake] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchedCars, setSearcherCars] = useState([]);
  const [selectPriceRange, setSelectPriceRange] = useState("");
  const likedCars = allCars.filter((car) => car.liked === true);

  const handleMakeChange = (e) => {
    setSelectMake(e.target.value);
  };
  const handlePriceRangeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectPriceRange(selectedValue);
  };

  const handleMinMileageChange = (e) => {
    setMinMileage(e.target.value);
  };

  const handleMaxMileageChange = (e) => {
    setMaxMileage(e.target.value);
  };

  const handleSearch = () => {
    const filtered = likedCars
      .filter((car) => !selectMake || car.make === selectMake)
      .filter(filterByPrice)
      .filter(filterByMileage);

    setSearcherCars(filtered);
    setSearching(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <main>
      <Filter
        makes={makes}
        selectMake={selectMake}
        minMileage={minMileage}
        maxMileage={maxMileage}
        priceOptions={priceOptions}
        selectPriceRange={selectPriceRange}
        onSubmit={handleSubmit}
        onMakeChange={handleMakeChange}
        onPriceRangeChange={handlePriceRangeChange}
        onMinMileageChange={handleMinMileageChange}
        onMaxMileageChange={handleMaxMileageChange}
      />
      {searching && !searchedCars.length ? (
        <p>Unfortunately, we couldn't find a car.</p>
      ) : (
        <CardList items={searchedCars.length ? searchedCars : likedCars} />
      )}
    </main>
  );
};

export default Favorites;
