import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import SourceCode from "./SourceCode";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp">
          <div className="weatherAppWrapper">
            <SearchForm />
            <hr />
            <CurrentWeather />
            <WeatherForecast />
            <SourceCode />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
