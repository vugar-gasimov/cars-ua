export const filterByPrice = (car, priceRange) => {
  const numValue = parseFloat(car.rentalPrice.replace(/[^\d.]/g, ""));
  if (!priceRange) {
    return true;
  }
  const [min, max] = priceRange.split("-");
  return numValue >= Number(min) && numValue <= Number(max);
};

export const filterByMileage = (car, minMileage, maxMileage) => {
  const mileage = car.mileage;
  if (minMileage && !/^\d+$/.test(minMileage)) {
    return false;
  }
  if (maxMileage && !/^\d+$/.test(maxMileage)) {
    return false;
  }
  if (minMileage && mileage < Number(minMileage)) {
    return false;
  }
  if (maxMileage && mileage > Number(maxMileage)) {
    return false;
  }
  return true;
};
