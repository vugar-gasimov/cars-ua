import React from "react";
import "../../App.css";
import "./filter.css";

const Filter = ({
  selectMake,
  selectPriceRange,
  minMileage,
  maxMileage,
  makes,
  priceOptions,
  onMakeChange,
  onPriceRangeChange,
  onMinMileageChange,
  onMaxMileageChange,
  onSubmit,
}) => {
  return (
    <form className="filter--container" onSubmit={onSubmit}>
      <label>
        Car brand
        <select value={selectMake} onChange={onMakeChange}>
          <option key="default" value="">
            Select a brand
          </option>
          {makes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Price/ 1 hour
        <select value={selectPriceRange} onChange={onPriceRangeChange}>
          {priceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Car mileage / km
        <div>
          <input
            placeholder="From"
            type="number"
            value={minMileage}
            onChange={onMinMileageChange}
          />
          <input
            placeholder="To"
            type="number"
            value={maxMileage}
            onChange={onMaxMileageChange}
          />
        </div>
      </label>
      <button className="main-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Filter;
