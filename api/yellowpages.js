"use strict";
const rp = require('request-promise');
const ypConfig = require('../config/config.json').yellowpages;

module.exports = {
  getPlaces: getPlaces
}

function getPlaces(city, query){
    if(!query){
        query = 'restaurants';
    }
    if(!city){
        city = 'montreal';
    }
    console.log('http://api.sandbox.yellowapi.com/FindBusiness/?what='+query+'&where='+city+'&UID=1&apikey='+ypConfig.places_sandbox_key+'&fmt=json')
  return rp('http://api.sandbox.yellowapi.com/FindBusiness/?what='+query+'&where='+city+'&UID=1&apikey='+ypConfig.places_sandbox_key+'&fmt=json')
    .then((data) => {
        console.log(data)
        data = JSON.parse(data);
        let results = [];
        console.log(data)
        for (var index=0; (index < 3 && index < data.listings.length); index++){
            let item = data.listings[index];
            let url = "https://www.google.com/maps?q="+
                      encodeURIComponent(item.address.street.replace(/\s/g, "+")) +","+
                      encodeURIComponent(item.address.city.replace(/\s/g, "+")) +","+
                      encodeURIComponent(item.address.prov.replace(/\s/g, "+")) +","+
                      encodeURIComponent(item.address.pcode.replace(/\s/g, "+"));
            
            results.push({
                id: item.id,
                name: item.name,
                address: item.address,
                mapURL: url
            })
        }
        console.log(results)

        return results;
    }).catch(err => {
        console.log(err);
    });
}