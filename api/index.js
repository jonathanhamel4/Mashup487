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

    var promiseArray = [
      weather.currentWeather(city),
      weather.forecast(city),
      twitter.getTrends({lat: lat, long:long}),
      twitter.getPopular({lat: lat, long:long, q: query}),
      news.getNews(query)
    ];

    return Promise.all(promiseArray)
    .then((data) => {
      var services = {
        weather: data[0],
        forecast: data[1],
        trendingTags: data[2],
        popularTweets: data[3],
        news: data[4]
      }
    });

  //  weather.currentWeather(city).then((info) => {
  //       services.weather = info;
  //   }).then(() => {
  //     return weather.forecast(city)
  //       .then((forecast) => {
  //         services.forecast = forecast;
  //       });
  //   }).then(() => {
  //     return twitter.getTrends({lat: lat, long:long})
  //       .then((trends) => {
  //         services.trendingTags = trends;
  //       });
  //   }).then(() => {
  //     return twitter.getPopular({lat: lat, long:long, q: query})
  //       .then((popular) => {
  //         services.popularTweets = popular;
  //       });
  //   }).then(() => {
  //     return news.getNews(query)
  //       .then((news) => {
  //         services.news = news;
  //       });
  //   }).then(() => {
  //     res.json(services);
  //   });
}
