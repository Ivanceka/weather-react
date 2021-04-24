import React from "react";
import "./Forecast.css";
import ForecastOneDay from "./ForecastOneDay";

export default function Forecast() {
  return (
    <div className="row dayCard">
      <div className="row">
        <ForecastOneDay />
        <ForecastOneDay />
        <ForecastOneDay />
        <ForecastOneDay />
        <ForecastOneDay />
      </div>
      <footer />
    </div>
  );
}
