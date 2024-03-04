const WEATHER_Key = "9a485886bd41242a7d7802e4e4610428";
export const LATITUDE = "latitude";
export const LONGITUDE = "longitude";
export const ICONCODE = "ICONCODE";
const WEATHER_RESULTS_COUNT = 10;
export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&APPID=${WEATHER_Key}`;
export const WEATHER_FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&cnt=${WEATHER_RESULTS_COUNT}&APPID=${WEATHER_Key}`;
export const ICON_URL = `http://openweathermap.org/img/w/${ICONCODE}.png`;

export const profile_details = {
  name: "Beant Kaur",
  email: "beantkaur8898@gmail.com",
  linkedin: "https://www.linkedin.com/in/beantkaur-frontenddeveloper/",
};
