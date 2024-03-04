import { createSlice } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
    forecastWeather: null,
  },
  reducers: {
    addWeather: (state, action) => {
      state.weather = action.payload;
    },
    addForecastWeather: (state, action) => {
      state.forecastWeather = action.payload;
    },
  },
});
export const { addWeather, addForecastWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;
