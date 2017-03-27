const rp = require('request-promise');
var parseString = require('xml2js').parseString;

module.exports = {
  getNews: getNews
}

/*
 params = city
*/
function getNews(query){
  var query = encodeURI(query);
  return rp.get("https://news.google.com/news?q=" + query + "&output=rss")
  .then(parseXML)
  .then((data) => {
    data = data.rss.channel[0].item.slice(0, 3);
    return data.map(d => {
      return {
        title: d.title[0],
        link: d.link[0],
        html: d.description[0]
      }
    });
  });

}

function parseXML(xml){
  return new Promise((resolve, reject) => {
    parseString(xml, function (err, result) {
      err ? reject(err) : resolve(result);
    });
  })
}
