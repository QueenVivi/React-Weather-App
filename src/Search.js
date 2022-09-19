import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);

  function handleSubmit(event) {
    let apiKey = "3e325415f46bc35d8d6a6bc88d7c8554";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    event.preventDefault();

    function displayWeather(response) {
      console.log(apiUrl);
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
    </div>
  );
}
