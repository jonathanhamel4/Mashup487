"use strict";
const rp = require('request-promise');
const wConfig = require('../config/config.json').weather;

module.exports = {
  currentWeather: currentWeather,
  forecast: forecast
}

function currentWeather(city){
  return rp('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + wConfig.client_id + "&units=Metric")
    .then((data) => {
      console.log(data);
      var weather = JSON.parse(data);

      var weather = {
        currentState: weather.weather[0].main,
        descriptionOfState: weather.weather[0].description,
        weatherIcon:weather.weather[0].icon,
        windCondition:weather.wind,
        weatherValues:weather.main
      }
      return weather;
    });
}

function forecast(city){
  return rp('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + wConfig.client_id + "&units=Metric")
    .then((data) => {
      console.log(data);
      return data;      
    });
}
