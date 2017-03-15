var ig = require('instagram-node').instagram();
var config = require('../config/config.json');

ig.use({ access_token: config.access_token });

function getMediasByTag(tag){
  return;
  // console.log(ig.access_token);
  // ig.tag_media_recent('montreal', {}, function(err, medias, pagination, remaining, limit) {
  //   console.log(medias);
  //   console.log(err);
  //   console.log(pagination);
  //   console.log(remaining);
  //   console.log(limit);
  // });
}


module.exports = {
  getMediasByTag: getMediasByTag
};
