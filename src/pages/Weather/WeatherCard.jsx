import React from "react";
import WeatherCurrentDetails from "./WeatherCurrentDetails";
import Shimmer from "../../components/Shimmer";
import { useSelector } from "react-redux";
import { TextConstant } from "../../utils/textConstant";
import WeatherForecastDetailsCard from "./WeatherForecastDetailsCard";

const WeatherCard = () => {
  const weather = useSelector((store) => store.weather.weather);
  const forecastWeather = useSelector((store) => store.weather.forecastWeather);

  if (!weather) return <Shimmer />;
  return (
    <>
      <WeatherCurrentDetails />
      <h3>{TextConstant.forecastDay}</h3>
      <div className="WeatherCardWrapper">
        {forecastWeather?.list?.map((ele, ind) => {
          return (
            <WeatherForecastDetailsCard
              list={ele}
              city={forecastWeather?.city}
              key={ind}
            />
          );
        })}
      </div>
    </>
  );
};

export default WeatherCard;
