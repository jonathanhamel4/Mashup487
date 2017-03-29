const rp = require('request-promise');
const ebConfig = require('../config/config.json').eventbrite;


module.exports={
    getEvents:getEvents
}

function getEvents(location){
    return rp('https://www.eventbriteapi.com/v3/events/search/?token='+ebConfig.access_token+'&location.latitude='+location.lat+'&location.longitude='+location.long)
        .then((data) =>{
           // console.log(data)
            data = JSON.parse(data);
            var results = [];
            for(var index =0; (index < 3 || index<data.length);index++){
                var event = data.events[index];
                 results.push({
                     title:event.name.text,
                     description:event.description.html,
                     eventURL:event.url,
                     start:event.start.utc,
                     end:event.end.utc,
                     status:event.status,
                     online_event:event.online_event,
                     is_free:event.is_free,
                     logo:event.logo.original.url
                  })

            }
            return results;
     }).catch((err) => {
        console.log(err)
     })
}
