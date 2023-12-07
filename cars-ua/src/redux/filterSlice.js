import { createSlice } from "@reduxjs/toolkit";
import { fetchCarData } from "./cars-ua/operations";
const initialState = {
  filter: {
    name: "",
    price: "",
    from: null,
    to: null,
  },
  startData: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStartData: (state, { payload }) => {
      state.startData = fetchCarData;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setName: (state, { payload }) => {
      state.filter.name = payload;
    },
    setPrice: (state, { payload }) => {
      state.filter.price = payload;
    },
    setFrom: (state, { payload }) => {
      state.filter.from = payload;
    },
    setTo: (state, { payload }) => {
      state.filter.to = payload;
    },
  },
});

export const { setStartData, setFilter, setName, setPrice, setFrom, setTo } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
