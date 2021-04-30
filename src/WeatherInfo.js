import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col-6">
        <h1>{props.data.city}</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="currentTime">
            <li>
              <WeatherIcon code={props.data.icon} size={52} />
              <h2>{props.data.temperature}</h2>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <FormattedTime date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="probabilityPrecipitation">
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Pressure: {props.data.pressure} mmHg</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
