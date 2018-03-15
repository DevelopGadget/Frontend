"use strict"
angular.module("ControllerEquipo", [])
  .controller("ControllerEquipo", function ($scope, $http,$location) {
    $scope.Equipos = [];
    $http.get("https://api-net.herokuapp.com/api/Equipos")
      .then(function (data) {
        $scope.Equipos = data.data;
      }, function (err) {

      });
  });