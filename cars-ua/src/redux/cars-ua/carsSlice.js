import { createSlice } from "@reduxjs/toolkit";
import { fetchCarData } from "./operations";

const initialState = {
  cars: [],
  error: "",
  loading: false,
  filter: "",
};

const carsSlice = createSlice({
  name: "cars-ua",
  initialState,
  reducers: {},
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
      });
  },
});

export const carsReducer = carsSlice.reducer;
