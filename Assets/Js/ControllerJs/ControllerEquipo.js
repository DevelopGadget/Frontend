angular.module('EquipoController', [])
.controller("EquipoController", function ($scope, $http) {
  $scope.Equipos = [];
  $http.get('https://api-net.herokuapp.com/api/Equipos')
    .then(function (data) {
      $scope.Equipos = data.data;
      console.log(data.data);
    }, function (err) {
      
    });
});