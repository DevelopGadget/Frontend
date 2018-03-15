"use strict"
angular.module("ControllerJugadores", [])
  .controller("ControllerJugadores", function ($scope, $http,$location) {
    $scope.Jugadores = [];
    $http.get("https://api-net.herokuapp.com/api/Jugadores")
      .then(function (data) {
        $scope.Jugadores = data.data;
      }, function (err) {

      });
  });