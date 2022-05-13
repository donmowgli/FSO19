import React from 'react'

export function search (sample, term){
    let countriesList = []
    sample.forEach(item => {
        if(item.name.common.includes(term)) {countriesList = countriesList.concat(item)}
    })
    return countriesList
}

const Country = ({countryName, capital, area, languages, flag}) => {
    return(
        <div>
            <CountryHeader countryName={countryName}></CountryHeader>
            <Line line = {'Capital: ' + capital}></Line>
            <Line line = {'Area: ' + area}></Line>
            <h3>Languages</h3>
            <Languages list = {languages}></Languages>
            <img src={flag}></img>
        </div>
    )
}

const CountryList = ({counList}) => {
    const list = counList.map(item => <ListItem item={item}></ListItem>)
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

const ListItem = ({item}) => {
    return(
        <p key={item}>• {item}</p>
    )
}

export {Country, CountryList, CountryHeader, Line, Languages, ListItem}