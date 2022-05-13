import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Content, search} from './country'

const App = () => {
  const [term, setTerm] = useState('')
  const [all, setAll] = useState([])
  const [found, setFound] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countries = response.data
        setAll(countries)
    })
  }, [])

  const handleTermChange = (event) => {
    setTerm(event.target.value)
    setFound(search(all, term))
  }

  return (
    <div>
      <h1>Countries</h1>
      <form>
        <p>Find countries</p>
        <input value={term} onChange={handleTermChange}></input>
      </form>
      <Content found={found}></Content>
    </div>
  );
}

export default App;
