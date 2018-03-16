angular.module('JugadoresController', [])

  .factory('Jugadores', function ($resource) {
    var Jugadores = {};
    Jugadores.Res = $resource('https://api-net.herokuapp.com/api/Jugadores/:id', {
      id: "@id"
    });

    Jugadores.getAll = function () {
      return Jugadores.Res.query(function (data) {
        console.log(data);
      });
    };

    Jugadores.Post = function (data) {
      return Jugadores.Res.save({
        data: data
      }, function (resp) {
        console.log(data);
      });
    }
    return Jugadores;
  })

  .controller('JugadoresController', function ($scope, Jugadores) {
    $scope.Jugadores = Jugadores.getAll();
    $scope.Post = function () {
      $scope.Post = {};
      if($scope.form.$valid){
        Jugadores.Post(Post);
      }
    }
  });