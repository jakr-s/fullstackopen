import { useState } from 'react'
import CountryInfo from './CountryInfo'

const CountryList = ({ countries }) => {
  const [shownCountries, setShownCountries] = useState({})

  const toggleCountry = (countryName) => {
    setShownCountries({
      ...shownCountries,
      [countryName]: !shownCountries[countryName]
    })
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          {country.name.common}{' '}
          <button onClick={() => toggleCountry(country.name.common)}>
            show
          </button>
          {shownCountries[country.name.common] && (
            <CountryInfo country={country} />
          )}
        </div>
      ))}
    </div>
  )
}

export default CountryList
