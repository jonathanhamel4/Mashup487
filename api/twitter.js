"use strict";
const twitter = require('twitter');
const tConfig = require('../config/config.json').twitter;

var client = new twitter(tConfig);

module.exports = {
  getTrends: getTrends,
  getPopular: getPopularTweets
}

/*
 params = lat & long
*/
function getTrends(location){
  return getClosest(location).then((woeid) => {
    if(woeid){
      return getTrendingTweets(woeid);
    } else {
      return null;
    }
  });
}

function getClosest(location){
  return client.get('/trends/closest.json', location)
    .then((trends) => {
      var woeid = trends.length > 0 ? trends[0].woeid : null;
      return woeid;
    });
}

function getTrendingTweets(woeid){
  return client.get('/trends/place.json', {id: woeid})
    .then((tweets) => {
      if(tweets.length && tweets[0].trends && tweets[0].trends.length){
        return tweets[0].trends.slice(0, 3);
      } else {
        return [];
      }
    });
}

function getPopularTweets(query){
  var q = encodeURI(query.q);
  var geocode = query.lat + "," + query.long + ",70km";
  //Could not get popular result_type for tweets..
  //Even though using q with the trending tags above. Only recent returns data..
  return client.get('/search/tweets.json', {q: q, geocode: geocode, result_type: "recent"})
    .then(tweets => {
      var statusPromises = [];
      tweets.statuses.slice(0,3).forEach(t => {
        var url = encodeURI("https://twitter.com/" + t.user.screen_name + "/status/" + t.id_str);
        console.log(url);
        statusPromises.push(client.get("/statuses/oembed", {url: url}));
      });

      return Promise.all(statusPromises)
    });
}
