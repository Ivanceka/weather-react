import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dayOfMounth = date.getDate();
    return `${day}, ${month} ${dayOfMounth}, ${year}`;
  }

  function formatTime(timestamp) {
    let date = new Date(timestamp);
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:${minutes}`;
  }

  function displayWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: Math.round(response.data.main.pressure * 0.75),
      description: response.data.weather[0].description,
      update: formatTime(response.data.dt * 1000),
      data: formatDate(response.data.dt * 1000),
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b67289479aba88961c62d3725b06c5f0&units=metric`;
    axios.get(url).then(displayWeather);
  }
  return (
    <div>
      <form className="row" onSubmit={handleSubmit}>
        <input
          className="col-9"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
          onChange={updateCity}
        />
        <button className="col-1" type="submit">
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
        <button className="col-2" type="button">
          Current city
        </button>
      </form>
      <div className="col-6">
        <h1>{city}</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="currentTime">
            <li>
              <h2>{weather.temperature}</h2>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </li>
            <li>{weather.data}</li>
            <li>Updated: {weather.update}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="probabilityPrecipitation">
            <li>{weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km/h</li>
            <li>Pressure: {weather.pressure} mmHg</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
