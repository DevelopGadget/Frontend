angular.module('EquipoController', ['ngResource'])

  .factory('Equipos', function ($resource) {
    var Equipos = {};

    Equipos.Res = $resource('https://api-net.herokuapp.com/api/Equipos/:id', {
      id: "@id"
    },

    { 'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE'},
      'put': {method:'PUT'}});

    Equipos.getAll = function () {
      return Equipos.Res.query(function (data) {
        console.log(data);
      });
    };

    Equipos.Post = function (data) {
      Equipos.Res.save({notify:true}, data, function (resp) {
        console.log(resp);
      }, function(error){
        console.log(error);
      });
    }

    return Equipos;
  })

  .controller("EquipoController", function ($scope, Equipos) {
    $scope.Equipos = Equipos.getAll();
    $scope.Array = {};
    $scope.Post = function () {
      if($scope.form.$valid){
        console.log($scope.Array);
        Equipos.Post($scope.Array);
      }
    }
  });
  