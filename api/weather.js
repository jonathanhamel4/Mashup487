"use strict";
const rp = require('request-promise');
const wConfig = require('../config/config.json').weather;

module.exports = {
  currentWeather: currentWeather
}

function currentWeather(city){
  return rp('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + wConfig.client_id)
    .then((data) => {
      console.log(data);
    });
}
