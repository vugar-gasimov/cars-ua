import React, { useState } from "react";
import Filter from "../../components/filters/Filter";
import { selectCars } from "../../redux/cars-ua/selectors";
import { useSelector } from "react-redux";
import CardList from "../../components/cardList/CardList";
import { makes, priceOptions } from "../../components/data/Data";
import {
  filterByPrice,
  filterByMileage,
} from "../../components/filters/FilterLogic";
const Favorites = () => {
  const allCars = useSelector(selectCars);

  const [selectMake, setSelectMake] = useState("");
  const [selectPriceRange, setSelectPriceRange] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [searchedCars, setSearcherCars] = useState([]);
  const [searching, setSearching] = useState(false);

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
        selectMake={selectMake}
        selectPriceRange={selectPriceRange}
        minMileage={minMileage}
        maxMileage={maxMileage}
        makes={makes}
        priceOptions={priceOptions}
        onMakeChange={handleMakeChange}
        onPriceRangeChange={handlePriceRangeChange}
        onMinMileageChange={handleMinMileageChange}
        onMaxMileageChange={handleMaxMileageChange}
        onSubmit={handleSubmit}
      />
      {searching && !searchedCars.length ? (
        <p>Cars not found</p>
      ) : (
        <CardList items={searchedCars.length ? searchedCars : likedCars} />
      )}
    </main>
  );
};

export default Favorites;
