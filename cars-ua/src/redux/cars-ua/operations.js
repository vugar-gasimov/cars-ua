import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const carsApi = axios.create({
  baseURL: "https://654a381ce182221f8d52bf6d.mockapi.io",
});

export const fetchCarData = createAsyncThunk(
  "cars/fetchData",
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const { data } = await carsApi.get("/UkrAutoRent?page=1&limit=12");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
