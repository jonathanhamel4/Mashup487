angular
.module('mashupApp', [
  'angularMoment',
  'ngAnimate',
  'ngMaterial',
  'ngtweet',
  'google.places'
])

.controller('dashboardCtrl', function(
  $http,
  $rootScope,
  $scope,
  $timeout
) {
  $scope.page = 'home page';

  $scope.place = "Montreal, QC, Canada"; // Initializing to Montreal
  $scope.body =  {
        city: "montreal",
        lat:  "45.500299",
        long: "-73.571646",
  }

  $scope.getNewPlace = function(){
      $scope.body = {
        city: $scope.place.address_components[0].long_name,
        lat:  $scope.place.geometry.location.lat(),
        long: $scope.place.geometry.location.lng()
      };

        $http.post('/services',$scope.body).then(function(response) {
        $scope.loadData(response.data);
  });
  }

  $scope.loadData = function(data) {
    $scope.data = data;

    // Pick a random backgroup
    $rootScope.bg = $scope.data.images[Math.floor(Math.random() * $scope.data.images.length)].link;

    $timeout(function() {
      $scope.loading = false;
    }, 2000);
  };

  // Load all of the content by sending a request to the backend API
  $scope.loading = true;
  $http.post('/services').then(function(response) {
    $scope.loadData(response.data);
  });

}).filter('trust', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  };
}).directive('backImg', function() {
  return function(scope, element, attrs){
    element.css({
      'background': 'url(' + attrs.backImg + ') no-repeat center center fixed',
      'background-size': 'cover'
    });
  };
}).filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});
