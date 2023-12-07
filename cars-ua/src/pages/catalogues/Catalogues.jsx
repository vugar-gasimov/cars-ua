import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/loader/Loader";
import { fetchCarData } from "../../redux/cars-ua/operations";
import "./catalogues.css";
import {
  selectCars,
  selectError,
  selectLoading,
} from "../../redux/cars-ua/selectors";
import "../../App.css";
import "./catalogues.css";
import Filter from "../../components/filters/Filter";
const Catalogues = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // const [itemsToShow, setItemsToShow] = useState(12);

  useEffect(() => {
    dispatch(fetchCarData());
  }, [dispatch]);

  // const showMoreItems = () => {
  //   setItemsToShow(itemsToShow + 12);
  // };

  return (
    <main>
      <Filter />
      {loading && <Loader />}
      {!loading && error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div>
          {cars?.map((car) => {
            console.log(car);
            return (
              <div key={car.id}>
                {car.model}
                {car.img}
              </div>
            );
          })}
        </div>
      )}
      {/* {cars < cars.items.length && (
        <button onClick={showMoreItems}>Показати більше</button>
      )} */}
    </main>
  );
};

export default Catalogues;
