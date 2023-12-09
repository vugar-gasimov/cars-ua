import { createSlice } from "@reduxjs/toolkit";
import { fetchCarData, updateLikeStatus } from "./operations";

const initialState = {
  cars: [],
  liked: false,
  error: "",
  loading: false,
  filter: "",
};

const carsSlice = createSlice({
  name: "cars-ua",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarData.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.loading = false;
      })
      .addCase(fetchCarData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateLikeStatus.fulfilled, (state, { payload }) => {
        const { id, liked } = payload;
        const carToUpdate = state.cars.find((car) => car.id === id);
        if (carToUpdate) {
          carToUpdate.liked = liked;
        }
      });
  },
});
export const { setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
