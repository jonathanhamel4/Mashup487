"use strict";
const twitter = require('twitter');
const tConfig = require('../config/config.json').twitter;

var client = new twitter(tConfig);

module.exports = {
  getTrends: getTrends
}

function getTrends(){
    console.log(tConfig)
  return client.get('/trends/closest.json?lat=37.781157&long=-122.400612831116', function(error, trends, response){
        console.log(trends);
  })
}