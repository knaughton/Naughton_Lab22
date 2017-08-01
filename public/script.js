var app = angular.module('myMod', []);

app.controller('myCtrl', function($scope, $http) {
  console.log('my ctrl is loaded');

$scope.favorite = function(){
  $http({
    method: 'GET',
    url: '/api/random-lyric'
  }).then(function(response) {
    console.log(response);
    $scope.lyric = response
  });
};
});

  // $http({
  //   method: 'GET',
  //   url: 'api/lyrics'
  // }).then(function(response) {
  //   console.log(response);
  // });

// $http({
//   method: 'GET',
//   url: '/api/random-lyric'
// }).then(function(response) {
//   console.log(response);
// });
//
// $http({
//   method: 'GET',
//   url: 'api/lyrics'
// }).then(function(response) {
//   console.log(response);
// });
