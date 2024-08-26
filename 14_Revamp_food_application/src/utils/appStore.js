import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //big reducer(App Reducer) with small-2 reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
