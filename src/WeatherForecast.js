import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="row">
      <div className="col">
        <div className="dailyForecast">
          <div className="forecastDay">MON</div>
          <div className="forecastIcon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Forecasted weather icon"
            />
          </div>
          <div className="forecastTemperatures">
            <span className="forecastHigh">
              8<span>°</span>
            </span>
            <span className="forecastLow">
              5<span>°</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="dailyForecast">
          <div className="forecastDay">TUE</div>
          <div className="forecastIcon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Forecasted weather icon"
            />
          </div>
          <div className="forecastTemperatures">
            <span className="forecastHigh">
              8<span>°</span>
            </span>
            <span className="forecastLow">
              5<span>°</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="dailyForecast">
          <div className="forecastDay">WED</div>
          <div className="forecastIcon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Forecasted weather icon"
            />
          </div>
          <div className="forecastTemperatures">
            <span className="forecastHigh">
              8<span>°</span>
            </span>
            <span className="forecastLow">
              5<span>°</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="dailyForecast">
          <div className="forecastDay">THU</div>
          <div className="forecastIcon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Forecasted weather icon"
            />
          </div>
          <div className="forecastTemperatures">
            <span className="forecastHigh">
              8<span>°</span>
            </span>
            <span className="forecastLow">
              5<span>°</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="dailyForecast">
          <div className="forecastDay">FRI</div>
          <div className="forecastIcon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Forecasted weather icon"
            />
          </div>
          <div className="forecastTemperatures">
            <span className="forecastHigh">
              8<span>°</span>
            </span>
            <span className="forecastLow">
              5<span>°</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
