angular.module('App', ['appRoutes', 'EquipoController', 'JugadoresController'])
  .factory("HTTP", function ($http, $filter) {
    var HTTP = {};
    HTTP.Equipos = function (scope) {
      $http.get('https://api-net.herokuapp.com/api/Equipos').then(function (resp) {
        scope.Equipos = resp.data;
        scope.mostrar = true;
      }, function (error) {
        scope.mostrar = false;
      });
    }
    HTTP.Jugadores = function (scope, id) {
      $http.get('https://api-net.herokuapp.com/api/Jugadores').then(function (resp) {
        scope.Jugadores = [];
        console.log(scope.Jugadores);
        scope.Jugadores =
          resp.data.filter(function (item) {
            return item.sEquipo.Id === id;
          });
        scope.mostrarLoad = false;
        scope.jugadores = true;
      }, function (error) {
        scope.mostrarLoad = true;
      });
    }
    return HTTP;
  })
  .controller('IndexController', function ($scope, HTTP) {
    $scope.mostrar = false;
    $scope.jugadores = false;
    $scope.mostrarLoad = false;
    HTTP.Equipos($scope);
    $scope.Seleccion = function (id) {
      $scope.mostrarLoad = true;
      HTTP.Jugadores($scope, id);
    }

  });