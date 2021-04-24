import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Overview from "./Overview";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="mb-3">
          <Search />
        </div>
        <Overview />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
