import React from "react";
import { ICONCODE, ICON_URL } from "../../utils/constant";
import { getDate, kelToCel } from "../../utils/helper";
import { TextConstant } from "../../utils/textConstant";

const WeatherForecastDetailsCard = (props) => {
  const { list, city } = props || [];
  const { temp, temp_max, temp_min, feels_like } = list?.main;
  return (
    <div className="weatherDetailsCard">
      <p className="weatherDes">{getDate(list?.dt, city?.timezone)}</p>

      <div className="flexContainer">
        <p>{list?.weather[0]?.main}</p>
        <img
          className="weather_con"
          src={ICON_URL.replace(ICONCODE, list?.weather[0]?.icon)}
          alt="Weather icon"
        ></img>
      </div>

      <p>
        {TextConstant.temp} {kelToCel(temp)}°C
      </p>
      <p>
        {TextConstant.feels} <span>{kelToCel(feels_like)}°C </span>
      </p>

      <div className="flexContainer">
        <p>
          {TextConstant.high} {kelToCel(temp_max)}°C
        </p>
        <p>
          {TextConstant.low} {kelToCel(temp_min)}°C
        </p>
      </div>
      <p>
        {TextConstant.wind} {list?.wind?.speed} meter/sec
      </p>
    </div>
  );
};

export default WeatherForecastDetailsCard;
