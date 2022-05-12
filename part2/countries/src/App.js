import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Country from './country'

const App = () => {
  const [term, setTerm] = useState('')
  const [all, setAll] = useState('')
  const [found, setFound] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countries = response.data
        setAll(countries)
    })
  }, [])

  const Content = () => {
    if(found.length === 1){
      const chosen = found[0]
      return(
        <Country.Country countryName={chosen.name.common} capital={chosen.capital} area={chosen.area} languages={chosen.languages}></Country.Country>
      )
    }else if (found.length < 10){
      let counList = []
      found.forEach(item => {counList.concat(item.name.common)})
      return(
        <Country.CountryList props={counList}></Country.CountryList>
      )
    }
    return(
      <Country.Line props={'Too many matches, specify filter'}></Country.Line>
    )
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value)
    setFound(Country.search(all, term))
  }

  return (
    <div>
      <h1>Countries</h1>
      <form>
        <p>Find countries</p>
        <input> value={term} onChange={handleTermChange}</input>
      </form>
      <Content></Content>
    </div>
  );
}

export default App;
