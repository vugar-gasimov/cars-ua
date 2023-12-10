import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarData } from "../../redux/cars-ua/operations";
import {
  selectCars,
  selectError,
  selectLoading,
} from "../../redux/cars-ua/selectors";
import { ThreeCircles } from "react-loader-spinner";
import Filter from "../../components/filters/Filter";
import CardList from "../../components/cardList/CardList";
import Symbols from "../../components/icons/Symbols";
import "../../App.css";
import "./catalogues.css";
import { makes, priceOptions } from "../../components/data/Data";
import {
  filterByPrice,
  filterByMileage,
} from "../../components/filters/FilterLogic";
const Catalogues = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const error = useSelector(selectError);
  const allCars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const [showedCars, setShowedCars] = useState(1);
  const [selectMake, setSelectMake] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchedCars, setSearcherCars] = useState([]);
  const [selectPriceRange, setSelectPriceRange] = useState("");

  useEffect(() => {
    const payload = {
      page: showedCars,
      limit: 12,
    };
    dispatch(fetchCarData(payload)).then((response) => {
      setData([...data, ...response.payload]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showedCars]);

  const showMore = () => {
    setShowedCars((prevShowedCars) => prevShowedCars + 1);
  };
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
    const filtered = allCars
      .filter((car) => !selectMake || car.make === selectMake)
      .filter((car) => filterByPrice(car, selectPriceRange))
      .filter((car) => filterByMileage(car, minMileage, maxMileage));

    setSearcherCars(filtered);
    setSearching(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <main className="catalogues--main">
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
        <p>No matching cars found</p>
      ) : (
        <CardList items={searchedCars.length ? searchedCars : data} />
      )}

      {loading ? (
        <div>
          <ThreeCircles
            height="100"
            width="100"
            color="#3470FF"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : error ? (
        <p>Apologies 401 {error}</p>
      ) : (
        showedCars < 3 && (
          <button className=" load-more-btn" onClick={showMore}>
            Load more <Symbols />
            <svg width={20} height={20}>
              <use xlinkHref="#icon-down" />
            </svg>
          </button>
        )
      )}
    </main>
  );
};

export default Catalogues;
