import React from "react";
import "./ForecastOneDay.css";

export default function ForecastOneDay() {
  let weatherNextDay = {
    temp: 18,
    day: "Tomorrow",
    icon: "fas fa-sun",
  };
  return (
    <div className="card" style={{ width: "8rem" }}>
      <div className="card-body">
        <span className="weatherIcon">
          <i className={weatherNextDay.icon}></i>
        </span>
        <p className="card-text nextDateToday">
          {weatherNextDay.day}
          <br />
          {weatherNextDay.temp}°C
        </p>
      </div>
    </div>
  );
}
