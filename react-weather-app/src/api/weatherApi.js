import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});

const getWeatherBasedOnLocation = (city) => {
  return apiClient
    .get(
      `/weather?q=${city}&APPID=e906367ae95be289b53b02b7cc016e4d&units=imperial`
    )
    .then((res) => res.data);
};

const getForecast = (lat, lon) => {
  return apiClient
    .get(
      `/onecall?lat=${lat}&lon=${lon}&APPID=e906367ae95be289b53b02b7cc016e4d&units=imperial`
    )
    .then((res) => res.data);
};

export { getWeatherBasedOnLocation, getForecast };
