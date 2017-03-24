"use strict";
var weather = require('./weather');
var twitter = require('./twitter');

module.exports = {
  getAllServices: getAllServices
}

function getAllServices(req,res){
    var services = [];
    var city = req.body.city;
    
   weather.currentWeather(city).then((info => {
        services.push({weather:info});
    }))
    .then(weather.forecast(city).then((trends => {
        console.log(trends);
        twitter.getTrends()
    })))
}