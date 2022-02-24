import './App.scss';
import React, {useEffect, useState} from 'react';
import Weather from './Components/Weather';
import SearchBar from './Components/SearchBar';
import axios from 'axios';


export default function App() {
  const [weather, setWeather] = useState({});
  const [input, setInput] = useState('');
  const [city, setCity] = useState('guadalajara'); 
  const apiKey= process.env.REACT_APP_API_KEY;
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
    <div className="App">
      <SearchBar inputHandler= {inputHandler} input={input} submitHandler= {submitHandler}/>
      <Weather weather= {weather}/>
    </div>
  );
}
