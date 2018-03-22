angular.module('App', ['appRoutes', 'EquipoController', 'JugadoresController'])
  .factory("HTTP", function ($http) {
    var HTTP = {};
    HTTP.Equipos = function(scope){
      $http.get('https://api-net.herokuapp.com/api/Equipos').then(function (resp) {
        scope.Equipos = resp.data;
        scope.mostrar = true;
      }, function (error) {
        scope.mostrar = false;
      });
    }
    return HTTP;
  })
  .controller('IndexController', function ($scope, HTTP) {
    $scope.mostrar = false;
    $scope.jugadores = false; 
    $scope.mostrarLoad  = false; 
    HTTP.Equipos($scope);
    $scope.Seleccion = function (id) {
      $scope.mostrarLoad  = true;
    }

  });