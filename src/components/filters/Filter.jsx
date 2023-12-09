import React from "react";
import "../../App.css";
import "./filter.css";
import Down from "../icons/icon-down.svg";

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
    <form className="filter--form" onSubmit={onSubmit}>
      <div className="filter--form-container">
        <label>
          <p className="text">Car brand</p>
          <select
            className="selects select-left"
            value={selectMake}
            onChange={onMakeChange}
            style={{
              backgroundImage: `url(${Down})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "calc(100% - 15px) center",
            }}
          >
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
          <p className="text">Price/ 1 hour</p>
          <select
            className="selects select-right"
            value={selectPriceRange}
            onChange={onPriceRangeChange}
            style={{
              backgroundImage: `url(${Down})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "calc(100% - 15px) center",
            }}
          >
            {priceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="filter--input-labels">
        <p className="text">Car mileage / km</p>
        <div className="filter--inputs-container">
          <input
            className="filter--input-left"
            placeholder="From"
            type="number"
            value={minMileage}
            onChange={onMinMileageChange}
          />
          <input
            className="filter--input-right"
            placeholder="To"
            type="number"
            value={maxMileage}
            onChange={onMaxMileageChange}
          />
        </div>
      </label>
      <button
        className="main-btn filter--submit-btn
      "
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Filter;
