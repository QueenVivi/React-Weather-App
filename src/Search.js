import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    let apiKey = "3e325415f46bc35d8d6a6bc88d7c8554";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    event.preventDefault();

    function displayWeather(response) {
      setWeatherData(response.data);
    }
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          onChange={showCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      {weatherData && (
        <ul className="WeatherDescription">
          <li>{city}</li>
          <li>Temperature: {Math.round(weatherData.main.temp)}°C</li>
          <li>Description: {weatherData.weather[0].description}</li>
          <li>Humidity:{weatherData.main.humidity}</li>
          <li>Wind:{weatherData.wind.speed}km/h</li>
          <li>
            <img
              alt={`weather icon: ${weatherData.weather[0].description}`}
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
          </li>
        </ul>
      )}
      <p>
        <a
          href="https://github.com/QueenVivi/React-Weather-App"
          title="link to github"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>{" "}
        code by Vivian Xu
      </p>
    </div>
  );
}
