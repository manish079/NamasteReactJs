import { configureStore, createReducer } from "@reduxjs/toolkit";
import createReducer from "./cartSlice";

const appStore = configureStore({
  //big reducer(App Reducer) with small-2 reducers
  reducer: {
    cart: createReducer,
  },
});

export default appStore;
