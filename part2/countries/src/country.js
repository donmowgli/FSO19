import React from 'react'

export function search (sample, term){
    let countriesList = []
    sample.forEach(item => {
        if(item.name.common.includes(term)) countriesList.concat(item)
    })
    return countriesList
}

const Country = () =>{

    const Country = ({countryName, capital, area, languages}) => {
        return(
            <div>
                <CountryHeader props ={countryName}></CountryHeader>
                <line props = {capital}></line>
                <line props = {area}></line>
                <languages props = {languages}></languages>
            </div>
        )
    }

    const CountryList = (props) => {
        const list = props.map(item => ListItem(item))
        return list
    }

    const CountryHeader = (props) => {
        return(
            <h2>{props}</h2>
        )
    }

    const Line = (props) => {
        return(
            <p>{props}</p>
        )
    }

    const Languages = (props) => {
        const langs = props.map(name => ListItem(name))
        return langs
    }

    const ListItem = (props) => {
        return(
            <p>{props}</p>
        )
    }
}

export default Country