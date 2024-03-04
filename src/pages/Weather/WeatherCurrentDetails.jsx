import React from "react";
import { getDate, kelToCel } from "../../utils/helper";
import { ICONCODE, ICON_URL } from "../../utils/constant";
import { useSelector } from "react-redux";
import { TextConstant } from "../../utils/textConstant";

const WeatherCurrentDetails = () => {
  const weather = useSelector((store) => store.weather.weather);
  const { name, timezone, dt } = weather || [];
  const { sunrise, sunset } = weather?.sys || [];
  const { temp, temp_max, temp_min } = weather?.main;
  const { description, icon } = weather?.weather[0];

  return (
    <div>
      <p className="cityName">{name}</p>
      <p className="temp"> {kelToCel(temp)}°</p>
      <div className="flexContainer">
        <p className="weatherDes">{description}</p>
        <img
          className="weather_con"
          src={ICON_URL.replace(ICONCODE, icon)}
          alt="Weather icon"
        ></img>
      </div>
      <div className="flexContainer">
        <p className="weatherDes">
          {TextConstant.high} {kelToCel(temp_max)}°C{" "}
        </p>
        <p className="weatherDes">
          {TextConstant.low} {kelToCel(temp_min)}°C
        </p>
      </div>
      <p>
        {TextConstant.sunrise} {getDate(sunrise, timezone)}
      </p>
      <p>
        {TextConstant.sunset} {getDate(sunset, timezone)}
      </p>
      <p>
        {TextConstant.currentDT} {getDate(dt, timezone)}
      </p>
    </div>
  );
};

export default WeatherCurrentDetails;
