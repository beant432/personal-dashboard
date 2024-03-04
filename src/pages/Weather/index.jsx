import React from "react";
import "./index.scss";
import WeatherCard from "./WeatherCard";
import Shimmer from "../../components/Shimmer";
import useFetchWeather from "../../customHooks/useFetchWeather";
import { useSelector } from "react-redux";
import useFetchForecastWeather from "../../customHooks/useForecastFetchWeather";
import { TextConstant } from "../../utils/textConstant";

const Weather = () => {
  //custom hokks to fetch current weather and forecast data
  useFetchWeather();
  useFetchForecastWeather();

  const weather = useSelector((store) => store.weather.weather);

  if (!weather) return <Shimmer />;
  return (
    <div className="weather-wrapper">
      <h6 className="weather_header">{TextConstant.weather}</h6>
      <div className="weather-card">
        <div className="weather-body">
          {weather ? (
            <WeatherCard />
          ) : (
            <p className="error">{TextConstant.weatherError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
