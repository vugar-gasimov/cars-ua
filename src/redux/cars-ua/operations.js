import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const carsApi = axios.create({
  baseURL: "https://654a381ce182221f8d52bf6d.mockapi.io",
});

export const fetchCarData = createAsyncThunk(
  "cars/fetchData",
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const { data } = await carsApi.get(
        `UkrAutoRent?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateLikeStatus = createAsyncThunk(
  "cars/updateLikeStatus",
  async ({ id, liked }, thunkAPI) => {
    try {
      const updatedLikeStatus = Boolean(liked);
      const { data } = await carsApi.put(`UkrAutoRent/${id}`, {
        liked: updatedLikeStatus,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
