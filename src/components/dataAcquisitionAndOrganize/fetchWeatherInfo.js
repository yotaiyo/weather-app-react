import {baseURL} from "../../config/baseURL"

const fetchWeatherInfo = (cityId) => {
  const URL = baseURL + cityId;

  return fetch(URL)
    .then(response => response.json())
    .catch(error => console.error(error));
};

export default fetchWeatherInfo;
