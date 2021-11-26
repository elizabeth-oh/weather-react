import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let WeatherData = {
    city: "Paris",
    date: "Tue 23 Nov 14:08",
    temperature: 10,
    description: "Cloudy",
    humidity: 10,
    wind: 15
  };

  return (
    <div className="row currentWeather">
      <div className="col-6">
        <div className="row">
          <div className="col">
            <h1>{WeatherData.city}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul>
              <li className="currentTime">{WeatherData.date}</li>
              <li>{WeatherData.description}</li>
              <li>
                Humidity: <span>{WeatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span>{WeatherData.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-3 currentWeather">
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png"
          alt=""
        />
      </div>
      <div className="col-3">
        <h2>25</h2>
        <span className="units">
          <a href="https://github.com" className="activeUnit">
            °C
          </a>{" "}
          | <a href="https://github.com">°F</a>
        </span>
      </div>
    </div>
  );
}
