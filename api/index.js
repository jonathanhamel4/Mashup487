"use strict";
var weather = require('./weather');
var twitter = require('./twitter');
var news = require('./news');

module.exports = {
  getAllServices: getAllServices
}

function getAllServices(req,res){
    var services = {};
    var city = "montreal";
    var lat = "45.500299";
    var long = "-73.571646";
    var query = "montreal";

   weather.currentWeather(city).then((info) => {
        services.weather = info;
    }).then(() => {
      return weather.forecast(city)
        .then((forecast) => {
          services.forecast = forecast;
        });
    }).then(() => {
      return twitter.getTrends({lat: lat, long:long})
        .then((trends) => {
          services.trends = trends;
        });
    }).then(() => {
      return news.getNews(query)
        .then((news) => {
          services.news = news;
        });
    }).then(() => {
      res.json(services);
    });
}
