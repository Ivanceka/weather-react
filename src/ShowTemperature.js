import React, { useState } from "react";

export default function ShowTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <h2>{Math.round(props.celsius)}</h2>
        <span className="units">
          <a href="/">°C</a> |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <h2>{Math.round(fahrenheit)}</h2>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | <a href="/">°F</a>
        </span>
      </span>
    );
  }
}
