import CountryInfo from './CountryInfo'
import CountryList from './CountryList'

const Results = ({ countries, searchFor }) => {
  const filteredCountries =
    searchFor !== ''
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchFor.toLowerCase())
        )
      : []

  if (filteredCountries.length > 10)
    return <p>Too many matches, specify another filter</p>

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0]

    return <CountryInfo country={country} />
  }

  return <CountryList countries={filteredCountries} />
}

export default Results
