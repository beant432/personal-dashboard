import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./WeatherSlice";

const appStore = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});

export default appStore;
