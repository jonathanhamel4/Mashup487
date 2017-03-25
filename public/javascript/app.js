angular
.module('mashupApp', [
  'ngMaterial'
])
.controller('dashboardCtrl', function($scope, $timeout) {
  $scope.page = 'home page';
  $scope.testvar = 'whats up ma boiiiii';

  $scope.content = {};

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



});
