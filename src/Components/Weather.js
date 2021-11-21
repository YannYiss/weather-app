import React from 'react';
import './Weather.scss'



export default function Weather({weather}) {
    return (
        <div className= 'weatherInfo'>
            {weather.main ? 
                <>
                    <h1>{weather.name}</h1>
                    <h2>{weather.main.temp} °C</h2>
                    <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=''></img>
                    <h2>{(weather.weather[0].description).toUpperCase()}</h2>
                    <h3>Feels like: {weather.main.feels_like} °C</h3>
                    <h3>Min: {weather.main.temp_min} °C | Max: {weather.main.temp_max} °C</h3>
                    <h3>Wind Speed: {weather.wind.speed} Km/h</h3>
                </>
                : 
                    <h2>Loading...</h2>
            }
        </div>
    )
}
