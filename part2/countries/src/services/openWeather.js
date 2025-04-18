import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = import.meta.env.VITE_OPEN_WEATHER

const getForecast = (latLng) => {
  const request = axios.get(
    `${baseUrl}?lat=${latLng[0]}&lon=${latLng[1]}&units=metric&appid=${API_KEY}`
  )
  return request.then((response) => response.data)
}

export default { getForecast }
