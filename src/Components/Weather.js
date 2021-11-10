import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function Weather() {
    const [weather, setWeather] = useState({});
    const [input, setInput] = useState('');
    const [city, setCity] = useState('');
    const apiKey= process.env.REACT_APP_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const inputHandler = (event) => {
        setInput(event.target.value)
    }
    const submitHandler = () => setCity(input);
    useEffect(() => {
        axios.get(url)
        .then(
            (response) => setWeather(response.data)
        )
        .catch((e) => console.log(e))
    }, [url]);
    return (
        <div>
            <div>
                <input type="text" placeholder="Search your city" value={input} onChange= {inputHandler}></input>
                <button onClick={submitHandler}>Search</button>
            </div>
            <h1>{weather.name}</h1>
            <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img>
            {weather.main ? 
                <>
                    <h2>{weather.main.temp} °C</h2>
                    <h2>{weather.weather[0].description}</h2>
                    <h3>Feel's like: {weather.main.feels_like} °C</h3>
                    <h3>Min: {weather.main.temp_min} °C | Max: {weather.main.temp_max}</h3>
                    <h3>Wind Speed: {weather.wind.speed} Km/h</h3>
                </>
                : <h2>Loading...</h2>}
        </div>
    )
}
