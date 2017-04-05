const iConfig = require('../config/config.json').image;
const rp = require('request-promise');

module.exports = {
  getImages: getImages
}

function getImages(imgQuery){
  var query = encodeURI(imgQuery);
  var url = "https://www.googleapis.com/customsearch/v1?num=3&searchType=image&q=" + query + "&cx=" + iConfig.cx + "&key=" + iConfig.api_key +"&alt=json";
  return rp.get(url)
  .then((results) => {
    return JSON.parse(results).items;
  });
}
