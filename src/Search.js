import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="row">
      <input
        className="col-9"
        placeholder="Enter a city"
        autoComplete="off"
        autoFocus="on"
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
  );
}
