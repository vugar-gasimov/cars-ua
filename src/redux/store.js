import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carsReducer } from "./cars-ua/carsSlice";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: { cars: persistReducer(persistConfig, carsReducer) },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
