angular
.module('mashupApp', [
  'ngMaterial'
])

.controller('dashboardCtrl', function($scope, $timeout, $sce) {
  $scope.page = 'home page';
  $scope.testvar = 'whats up ma boiiiii';

  $scope.content = {};


  //////////////////////////////////////
  ////// WEATHER
  //////////////////////////////////////

  $scope.content.weather = {rain : false,
                            snow : true,
                            temperature : 27,
                            forecast : "balls",
                            iconUrl : "http://openweathermap.org/img/w/10d.png"
                          };
  $scope.content.weather.precipitation = "";
  
  if($scope.content.weather.rain || $scope.content.weather.snow) {
    $scope.content.weather.precipitation = $scope.content.weather.precipitation + "expect";
    if($scope.content.weather.rain){
      $scope.content.weather.precipitation = $scope.content.weather.precipitation + " rain";
    }
    if($scope.content.weather.rain && $scope.content.weather.snow){
      $scope.content.weather.precipitation = $scope.content.weather.precipitation + " and";
    }
    if($scope.content.weather.snow){
      $scope.content.weather.precipitation = $scope.content.weather.precipitation + " snow";
    }
  }

  ////////////////////  end of weather  /////////////////////


//////////////////////////////////////////////////
//////////   TRENDING TWEETS
//////////////////////////////////////////////////

//$scope.content.twitter = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tweet Button, Follow Button, and Web Intents javascript now support SSL <a href="http://t.co/9fbA0oYy">http://t.co/9fbA0oYy</a> ^TS</p>&mdash; Twitter API (@twitterapi) <a href="https://twitter.com/twitterapi/status/114749583439036416">September 16, 2011</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
$scope.content.twitter = $sce.trustAsHtml('<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tweet Button, Follow Button, and Web Intents javascript now support SSL <a href="http://t.co/9fbA0oYy">http://t.co/9fbA0oYy</a> ^TS</p>&mdash; Twitter API (@twitterapi) <a href="https://twitter.com/twitterapi/status/114749583439036416">September 16, 2011</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>');


  ////////////////////////////////////////
  ///// random tests by gracey
  /////////////////////////////////////////

  
  $scope.testarray = ["value1","value2","value3"];
  $scope.arrayOutput = $scope.testarray[0];
  
  
  //while(true){
    for(var i=0; i<$scope.testarray.length; i++) {

      $timeout(function(){
        $scope.arrayOutput = $scope.testarray[i];
      }, 2000); 

      //$scope.arrayOutput = $scope.testarray[i];
      //setTimeout(function(){}, 20000);
    }
  //}

/////////////////////  end of random tests by gracey  ////////////////////////

  $scope.restaurants = [
    {"businesses": 
        {
            "categories": [
                [
                    "Local Flavor",
                    "localflavor"
                ],
                [
                    "Mass Media",
                    "massmedia"
                ]
            ],
            "display_phone": "+1-415-908-3801",
            "id": "yelp-san-francisco",
            "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/nQK-6_vZMt5n88zsAS94ew/ms.jpg",
            "is_claimed": true,
            "is_closed": false,
            "location": {
                "address": [
                    "140 New Montgomery St"
                ],
                "city": "San Francisco",
                "coordinate": {
                    "latitude": 37.7867703362929,
                    "longitude": -122.399958372115
                },
                "country_code": "US",
                "cross_streets": "Natoma St & Minna St",
                "display_address": [
                    "140 New Montgomery St",
                    "Financial District",
                    "San Francisco, CA 94105"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Financial District",
                    "SoMa"
                ],
                "postal_code": "94105",
                "state_code": "CA"
            },
            "mobile_url": "http://m.yelp.com/biz/yelp-san-francisco",
            "name": "Yelp",
            "phone": "4159083801",
            "rating": 2.5,
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c7fb9aff59f9/ico/stars/v1/stars_2_half.png",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/d63e3add9901/ico/stars/v1/stars_large_2_half.png",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/8e8633e5f8f0/ico/stars/v1/stars_small_2_half.png",
            "review_count": 7140,
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/YcjPScwVxF05kj6zt10Fxw/ms.jpg",
            "snippet_text": "What would I do without Yelp?\n\nI wouldn't be HALF the foodie I've become it weren't for this business.    \n\nYelp makes it virtually effortless to discover new...",
            "url": "http://www.yelp.com/biz/yelp-san-francisco"
        }
    ,
    "total": 2316},
    {"businesses": 
        {
            "categories": [
                [
                    "Avi Flavor",
                    "Aviflavor"
                ],
                [
                    "Avi Media",
                    "Avismedia"
                ]
            ],
            "display_phone": "+15145678293",
            "id": "yelp-san-francisco",
            "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/nQK-6_vZMt5n88zsAS94ew/ms.jpg",
            "is_claimed": true,
            "is_closed": false,
            "location": {
                "address": [
                    "140 New Montgomery St"
                ],
                "city": "San Francisco",
                "coordinate": {
                    "latitude": 37.7867703362929,
                    "longitude": -122.399958372115
                },
                "country_code": "US",
                "cross_streets": "Natoma St & Minna St",
                "display_address": [
                    "140 New Montgomery St",
                    "Financial District",
                    "San Francisco, CA 94105"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Financial District",
                    "SoMa"
                ],
                "postal_code": "94105",
                "state_code": "CA"
            },
            "mobile_url": "http://m.yelp.com/biz/yelp-san-francisco",
            "name": "Avi",
            "phone": "4159083801",
            "rating": 5,
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c7fb9aff59f9/ico/stars/v1/stars_2_half.png",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/d63e3add9901/ico/stars/v1/stars_large_2_half.png",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/8e8633e5f8f0/ico/stars/v1/stars_small_2_half.png",
            "review_count": 7140,
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/YcjPScwVxF05kj6zt10Fxw/ms.jpg",
            "snippet_text": "What would I do without Yelp?\n\nI wouldn't be HALF the foodie I've become it weren't for this business.    \n\nYelp makes it virtually effortless to discover new...",
            "url": "http://www.yelp.com/biz/yelp-san-francisco"
        },
    "total": 7777}
  ];

});
