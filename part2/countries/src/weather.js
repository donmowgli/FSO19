import React from "react"
import { useState } from "react"
import axios from 'axios'

const GetWeather = (capital) =>{
    const [temp, setTemp] = useState('')
    const [imgurl, setUrl] = useState('')
    const [wind, setWind] = useState('')

    const api_key = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${capital}&aqi=no`
    axios
        .get(url)
        .then(response => {
            const weatherData = response.data
            setTemp(weatherData.current.temp_c)
            setUrl(weatherData.current.condition.icon)
            setWind(weatherData.current.wind_kph)
    })
    const weather = {
        temp: temp,
        imgurl: imgurl,
        wind: wind
    }
    return weather
}

export { GetWeather }