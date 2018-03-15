angular.module('JugadoresController', [])
.controller('JugadoresController', function ($scope, $http) {
  $scope.Jugadores = [];
  $http.get('https://api-net.herokuapp.com/api/Jugadores')
    .then(function (data) {
      $scope.Jugadores = data.data;
    }, function (err) {

    });
});