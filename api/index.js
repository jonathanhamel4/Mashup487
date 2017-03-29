"use strict";
var weather = require('./weather');
var twitter = require('./twitter');
var news = require('./news');
var images = require('./images');
var yellowpages = require('./yellowpages');
var eventbrite = require('./eventbrite');

module.exports = {
  getAllServices: getAllServices
}

//Images have a limit of 100 requests per day.
//So if you are testing, disable it in the meantime.
//Will forecast be needed?
function getAllServices(req,res){
    var services = {};
    var city = req.body.city || "montreal";
    var lat = req.body.lat  || "45.500299";
    var long =  req.body.long || "-73.571646";
    var query = req.body.query || req.body.city || "mtl";

    var promiseArray = [
      weather.currentWeather(city),
      weather.forecast(city),
      twitter.getTrends({lat: lat, long:long}),
      twitter.getPopular({lat: lat, long:long, q: query}),
      news.getNews(city),
      images.getImages(city),
      yellowpages.getPlaces(city),
      eventbrite.getEvents({lat:lat, long:long})
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
        places: data[6],
        events:data[7]
      }
      res.json(services);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}
