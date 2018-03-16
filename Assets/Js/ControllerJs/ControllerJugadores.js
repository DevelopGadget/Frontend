angular.module('JugadoresController', [])

  .factory('peticion', function ($resource) {
    var peticion = {};
    peticion.Res = $resource('https://api-net.herokuapp.com/api/Jugadores/:id', {
      id: "@id"
    });
    
    peticion.getAll = function () {
      return peticion.Res.query(function (data) {
        console.log(data);
      });
    };

    peticion.Post = function (data) {
      return peticion.Res.save({
        data: data
      }, function (resp) {
        console.log(data);
      });
    }
    return peticion;
  })
  .controller('JugadoresController', function ($scope, peticion) {
    $scope.Jugadores = peticion.getAll();

    $scope.Post = function () {

    }
  });