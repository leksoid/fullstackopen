import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    const [weather, setWeather] = useState()

    const params = {
        access_key: process.env.REACT_APP_WEATHER_API_KEY,
        query: city
    }

    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current`, {params})
          .then(response => {
            setWeather(response.data)
            console.log(response)
          }).catch(error => {
            console.log(error)
          })
      }, [])

    if (weather) {
        return (
            <div>
                <h3>The weather in {city}:</h3>
                <p>Temperature: {weather.current.temperature} Celcius</p>
                <img src={weather.current.weather_icons[0]}/>
                <p>Wind speed: {weather.current.wind_speed}</p>
            </div>
        )
    } else {
        return (
            <h3>Getting weather information ... </h3>
        )
    }
   
    

}

export default Weather