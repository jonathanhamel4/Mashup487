const iConfig = require('../config/config.json').image;
const rp = require('request-promise');

module.exports = {
  getImages: getImages
}

function getImages(imgQuery){
  var query = encodeURI(imgQuery);
  var url = "https://pixabay.com/api/?key=" + iConfig.api_key + "&safesearch=true&image_type=photo&q=" + query;
  return rp.get(url)
  .then((results) => {
    return JSON.parse(results).hits;
  });
}
