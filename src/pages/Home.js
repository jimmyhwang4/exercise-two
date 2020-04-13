import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

// API Keys
const defaultKey = "a0114a85a2ca2ec5ce78200957401e61";

function Home() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(null);

  const [cloudiness, setCloudiness] = useState(0);
  const [currentTemperature, setCurrentTemperature] = useState("");
  const [highTemperature, setHighTemperature] = useState("");
  const [lowTemperature, setLowTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [weatherType, setWeatherType] = useState("Clouds");

  let history = useHistory();

  useEffect(() => {
    let searchParams = history.location.search;
    let urlParams = new URLSearchParams(searchParams);
    let city = urlParams.get("city");
    if (city) {
      setCity(city);
    } else {
      setCity("New York City");
    }
  }, [history]);

  useEffect(() => {
    if (city) {
    // Make a request for the weather by city
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey}`
        )
        .then(function (response) {
          // handle success
          setWeatherData(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }, [city]);

  useEffect(() => {
    if (weatherData.main) {
      setCurrentTemperature(weatherData.main.temp);
      setHighTemperature(weatherData.main.temp_max);
      setLowTemperature(weatherData.main.temp_min);

      let cloudinessValue = weatherData.clouds.all / 200;
      setCloudiness(cloudinessValue);

      setHumidity(weatherData.main.humidity);
      setWindSpeed(weatherData.wind.speed);

      setWeatherType(weatherData.weather[0].main);
    }
  }, [weatherData]);

  return (
    <div
      className="SiteWrapper"
      style={{ backgroundColor: `rgba(0, 0, 0, ${cloudiness})` }}
    >
      <Header />
      <div className="Home">
        <h1>Weather in {city}</h1>
        <div className="WeatherInfo">
          <WeatherImage weatherType={weatherType} />
          <div className="WeatherInfo_Data">
            <div className="CurrentTemperature">
              <p className="CurrentTemperatureTemp">
                {currentTemperature}&#176;F
              </p>
              <p className="CurrentTemperatureLabel">Current Temperature</p>
            </div>

            <div className="OtherTemperatures">
              <p>
                High Temp: <strong>{highTemperature}&#176;F</strong>
              </p>
              <p>
                Low Temp: <strong>{lowTemperature}&#176;F</strong>
              </p>
            </div>

            <p>Humidity: {humidity}%</p>
            <p>Wind: {windSpeed}mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
