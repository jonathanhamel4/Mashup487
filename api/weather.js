"use strict";
const rp = require('request-promise');
const wConfig = require('../config/config.json').weather;

module.exports = {
  currentWeather: currentWeather
  forecast: forecast
}

function currentWeather(city){
  return rp('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + wConfig.client_id + "&unit=metric")
    .then((data) => {
      console.log(data);
      return data;
    });
}

function forecast(city){
  return rp('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + wConfig.client_id + "&unit=metric")
    .then((data) => {
      console.log(data);
      return data;      
    });
}
