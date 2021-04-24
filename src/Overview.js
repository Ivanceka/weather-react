import React from "react";
import "./Overview.css";

export default function Overview() {
  let weather = {
    city: "New York",
    temperature: 18,
    date: "Monday, April 12, 2021",
    update: "8:32",
    description: "Few clouds",
    humidity: 46,
    wind: 3,
    pressure: 768,
  };
  return (
    <div>
      <div className="col-6">
        <h1>{weather.city}</h1>
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
            <li>{weather.date}</li>
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
