"use strict"
angular.module("App", [])
  .controller("EquipoController", ["$scope", "$http", function (sp, http) {
    sp.Equipos = [];
    http.get("https://api-net.herokuapp.com/api/Equipos")
      .then(function (data) {
        sp.Equipos = data.data;
      }, function (err) {

      });
  }]);