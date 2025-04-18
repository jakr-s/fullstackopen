import { useEffect, useState } from 'react'
import api from '../services/openWeather'

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    api
      .getForecast(country.latlng)
      .then((data) => setWeather(data))
      .catch((error) => console.log(error))
  }, [country.latlng])

  return (
    <>
      <h1>{country.name.common}</h1>

      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>

      <h2>Languages</h2>

      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} />

      <h2>Weather in {country.name.common}</h2>

      {weather && (
        <>
          <p>Temperature {weather.main.feels_like} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </>
      )}
    </>
  )
}

export default CountryInfo
