angular.module('EquipoController', ['ngResource'])

  .factory('Equipos', function ($resource) {
    var Equipos = {};
    Equipos.Res = $resource('https://api-net.herokuapp.com/api/Equipos/:id', {
      id: "@id"
    });
    Equipos.getAll = function () {
      return Equipos.Res.query(function (data) {
        console.log(data);
      });
    };

    Equipos.Post = function (data) {
      Equipos.Res.save({
        data: data
      }, function (resp) {
        return data;
        console.log(data);
      });
    }

    return Equipos;
  })

  .controller("EquipoController", function ($scope, Equipos) {
    $scope.Equipos = Equipos.getAll();
    $scope.Post = {};
    $scope.Post = function () {
      console.log("hola");
      Equipos.Post();
    }
  });
  