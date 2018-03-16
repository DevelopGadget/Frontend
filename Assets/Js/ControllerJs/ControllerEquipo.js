angular.module('EquipoController', ['ngResource'])

  .factory('peticion', function ($resource) {
    var peticion = {};
    peticion.Res = $resource('https://api-net.herokuapp.com/api/Equipos/:id', {
      id: "@id"
    });
    console.log("hola");
    peticion.getAll = function () {
      return peticion.Res.query(function (data) {
        console.log(data);
      });
    };

    peticion.Post = function (data) {
      if (data !== {} || data !== null) {
        peticion.Res.save({
          data: data
        }, function (resp) {
          return data;
          console.log(data);
        });
      }
    }

    return peticion;
  })

  .controller("EquipoController", function ($scope, peticion) {
    $scope.Equipos = peticion.getAll();

    $scope.Post = function () {
      $scope.Post = {};
      peticion.Post();
    }
  });