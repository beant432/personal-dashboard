import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addWeather } from "../store/WeatherSlice";
import { LATITUDE, LONGITUDE, WEATHER_API_URL } from "../utils/constant";

const useFetchWeather = () => {
  const dispatch = useDispatch();
  const [coordinates, setCordinates] = useState({
    lat: [],
    long: [],
  });
  useEffect(() => {
    handleLocation();
  }, []);

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

  useEffect(() => {
    if (coordinates.lat == "" || coordinates.long == "") return;
    fetchWeather();
  }, [coordinates.lat, coordinates.long]);

  const fetchWeather = async () => {
    const data = await fetch(
      WEATHER_API_URL.replace(LATITUDE, coordinates.lat).replace(
        LONGITUDE,
        coordinates.long
      )
    );
    const json = await data.json();
    dispatch(addWeather(json));
  };
};

export default useFetchWeather;
