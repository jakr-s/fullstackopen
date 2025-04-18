import { useEffect, useState } from 'react'
import Results from './components/Results'
import Filter from './components/Filter'
import api from './services/countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchFor, setSearchFor] = useState('')

  useEffect(() => {
    api
      .getAll()
      .then((data) => setCountries(data))
      .catch((error) => console.log(error))
  }, [])

  const handleSearchFor = (event) => setSearchFor(event.target.value)

  return (
    <>
      <Filter searchFor={searchFor} handleSearchFor={handleSearchFor} />
      <Results countries={countries} searchFor={searchFor} />
    </>
  )
}

export default App
