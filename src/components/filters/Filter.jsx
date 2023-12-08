import React, { useEffect, useState } from "react";
import "../../App.css";
import "./filter.css";

const Filter = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mileFrom, setMileFrom] = useState("");
  const [mileTo, setMileTo] = useState("");

  const brandOptions = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land",
  ];
  const priceOptions = [
    "30",
    "35",
    "40",
    "45",
    "50",
    "$55",
    "$100",
    "$150",
    "200",
    "250",
    "300",
    "500",
  ];
  const [seachValue, setSearchValue] = useState("");

  //   useEffect(() => {
  //     onSubmit(searchValue);
  //   }, [searchValue]);

  return (
    <div className="filter--container">
      <div className="">
        <p>Car brand</p>
        <select
          className=""
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Select a brand</option>
          {brandOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <p>Price/ 1 hour</p>
        <select
          className=""
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Select a price</option>
          {priceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Сar mileage / km</p>
        <div className="">
          <input
            className=""
            placeholder="From"
            type="number"
            value={mileFrom}
            onChange={(e) => setMileFrom(e.target.value)}
          />
          <input
            className=""
            placeholder="To"
            type="number"
            onChange={(e) => setMileTo(e.target.value)}
          />
        </div>
      </div>

      <button className="main-btn" type="submit">
        Search
      </button>
    </div>
  );
};

export default Filter;

//   return (
//     <div className="filter--container">
//       <div className="">
//         <p>Car brand</p>
//         <button className="" type="button">
//           Enter the text
//         </button>
//       </div>
//       <div className="">
//         <p>Price/ 1 hour</p>
//         <button className="" type="button">
//           To $
//         </button>
//       </div>
//       <div>
//         <p>Сar mileage / km</p>
//         <div className="">
//           <input className="" placeholder="From" type="number" />
//           <input className="" placeholder="To" type="number" />
//         </div>
//       </div>

//       <button className="main-btn" onClick={handleSubmit} type="submit">
//         Search
//       </button>
//     </div>
//   );
// };

// export default Filter;
