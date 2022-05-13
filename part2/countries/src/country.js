import React from 'react'
import { GetWeather } from './weather'

export function search (sample, term){
    let countriesList = []
    sample.forEach(item => {
        if(item.name.common.includes(term)) {countriesList = countriesList.concat(item)}
    })
    return countriesList
}

const Content = ({found}) => {
    if(found.length === 1){
      const chosen = found[0]
      return(
        <Country countryName={chosen.name.common} capital={chosen.capital} area={chosen.area} languages={chosen.languages} flag={chosen.flags.png}></Country>
      )
    }else if (found.length < 10){
      return(
        <CountryList counList={found}></CountryList>
      )
    }
    return(
      <Line line={'Too many matches, specify filter'}></Line>
    )
  }

const Country = ({countryName, capital, area, languages, flag}) => {
    const weather = GetWeather(capital)
    return(
        <div>
            <CountryHeader countryName={countryName}></CountryHeader>
            <Line line = {'Capital: ' + capital}></Line>
            <Line line = {'Area: ' + area}></Line>
            <h3>Languages</h3>
            <Languages list = {languages}></Languages>
            <img src={flag}></img>
            <h3>Weather in {capital}</h3>
            <Line line = {'Temperature ' + weather.temp + ' Celcius'}></Line>
            <img src={weather.imgurl}></img>
            <Line line = {'Wind ' + weather.wind + ' kph'}></Line>
        </div>
    )
}

const CountryList = ({counList}) => {
    const list = counList.map(item => <CountryItem item={item}></CountryItem>)
    return list
}

const CountryHeader = ({countryName}) => {
    return(
        <h2>{countryName}</h2>
    )
}

const Line = ({line}) => {
    return(
        <p>{line}</p>
    )
}

const Languages = ({list}) => {
    const langList = Object.values(list)
    const langs = langList.map(name => <ListItem key={name} item={name}></ListItem>)
    return langs
}

const CountryItem = ({item}) => {
    return(
        <div>
            <button onClick={handleShown(item)}>Show</button>
            <p key={item}>{item.name.common}</p>
        </div>
    )
}

const ListItem = ({item}) => {
    return(
        <p key={item}>• {item}</p>
    )
}

const handleShown = ({item}) => {
    <Content found={[item]}></Content>
}

export {Content, Country, CountryList, CountryHeader, Line, Languages, ListItem}