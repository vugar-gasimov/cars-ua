import { createSlice } from "@reduxjs/toolkit";
import { fetchCarData } from "./operations";

const initialState = {
  cars: [],
  error: "",
  loading: false,
  filter: "",
  favorites: [],
};

const carsSlice = createSlice({
  name: "cars-ua",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarData.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.loading = false;
      })
      .addCase(fetchCarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
