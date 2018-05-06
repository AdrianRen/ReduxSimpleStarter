import axios from 'axios';

const API_KEY = '94153a7238217ff653bc6dba8d66fd7b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nz`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}