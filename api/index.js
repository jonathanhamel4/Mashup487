"use strict";
var weather = require('./weather');
var twitter = require('./twitter');
var news = require('./news');
var images = require('./images');
var yellowpages = require('./yellowpages');

module.exports = {
  getAllServices: getAllServices
}

//Images have a limit of 100 requests per day.
//So if you are testing, disable it in the meantime.

//Will forecast be needed? 
function getAllServices(req,res){
    var services = {};
    var city = "montreal";
    var lat = "45.500299";
    var long = "-73.571646";
    var query = "mtl";

    var promiseArray = [
      weather.currentWeather(city),
      weather.forecast(city),
      twitter.getTrends({lat: lat, long:long}),
      twitter.getPopular({lat: lat, long:long, q: query}),
      news.getNews(city),
      images.getImages(city),
      yellowpages.getPlaces(city)
    ];

    return Promise.all(promiseArray)
    .then((data) => {
      var services = {
        weather: data[0],
        forecast: data[1],
        trendingTags: data[2],
        popularTweets: data[3],
        news: data[4],
        images: data[5],
        places: data[6]
      }
      res.json(services);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}
