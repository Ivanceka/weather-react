import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";
import Forecast from "./Forecast";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: Math.round(response.data.main.pressure * 0.75),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    let apiKey = "b67289479aba88961c62d3725b06c5f0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "b67289479aba88961c62d3725b06c5f0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <div className="row g-3">
          <form className="col-sm-8" onSubmit={handleSubmit}>
            <input
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
          </form>
          <form className="col-sm-1" onClick={handleSubmit}>
            <button type="submit" className="Search form-control">
              <span role="img" aria-label="search">
                🔍
              </span>
            </button>
          </form>
          <form className="col-sm-3" onClick={getCurrentPosition}>
            <button className="currentCity form-control" type="button">
              Current city
            </button>
          </form>
        </div>
        <WeatherInfo data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
