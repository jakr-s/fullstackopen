import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then((response) => response.data)
}

// const getCountry = (searchQuery) => {
//   const request = axios.get(`${baseUrl}/name/${searchQuery}`)
//   return request.then((response) => response.data)
// }

export default { getAll }
