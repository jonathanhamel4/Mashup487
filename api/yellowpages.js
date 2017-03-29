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
  return rp('http://api.sandbox.yellowapi.com/FindBusiness/?what='+query+'&where='+city+'&UID=1&apikey='+ypConfig.places_sandbox_key+'&fmt=json')
    .then((data) => {
        data = JSON.parse(data);
        let results = [];
        for (var index=0; index < data.listings.length; index++){
            if(data.listings[index].address == null || data.listings[index].address == "")
                index++;

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
        return results.slice(0,3);
    }).catch(err => {
        console.log(err);
    });
}