import { useDispatch } from "react-redux";
import { addForecastWeather } from "../store/WeatherSlice";
import { useEffect, useState } from "react";
import {
  LATITUDE,
  LONGITUDE,
  WEATHER_FORECAST_API_URL,
} from "../utils/constant";

const useFetchForecastWeather = async () => {
  const dispatch = useDispatch();
  const [coordinates, setCordinates] = useState({
    lat: [],
    long: [],
  });

  useEffect(() => {
    handleLocation();
  }, []);

  useEffect(() => {
    if (coordinates.lat == "" || coordinates.long == "") return;
    fetchForecastWeather();
  }, [coordinates.lat, coordinates.long]);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      }, console.log("Unable to get Location"));
    } else {
      console.log("Geolocation not supported");
    }
  };
  const fetchForecastWeather = async () => {
    const data = await fetch(
      WEATHER_FORECAST_API_URL.replace(LATITUDE, coordinates.lat).replace(
        LONGITUDE,
        coordinates.long
      )
    );
    const json = await data.json();
    dispatch(addForecastWeather(json));
  };
};
export default useFetchForecastWeather;
