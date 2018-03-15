angular.module('EquipoController', [])
  .service('peticion', function ($http, $scope) {
    this.get = function () {
      $http({
          method: "GET",
          url: "https://api-net.herokuapp.com/api/Equipos",
          timeout: 15 * 1000
        })
        .then(function (data) {
          $scope.Equipos = data.data;
        }, function (data, status, headers, config) {
          return status;
        });
    }
  })
  .controller("EquipoController", function ($scope, $http, peticion) {
    //console.log(peticion.get());
     peticion.get();
  });