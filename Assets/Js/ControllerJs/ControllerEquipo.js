angular.module('EquipoController', ['ngResource'])

  .factory('Equipos', function ($resource) {
    var Equipos = {};

    Equipos.Res = $resource('https://api-net.herokuapp.com/api/Equipos/:id', {
        id: "@id"
      },

      {
        'get': {
          method: 'GET'
        },
        'save': {
          method: 'POST'
        },
        'query': {
          method: 'GET',
          isArray: true
        },
        'remove': {
          method: 'DELETE'
        },
        'put': {
          method: 'PUT'
        }
      });

    Equipos.getAll = function () {
      return Equipos.Res.query(function (data) {
        console.log(data);
      }, function (error) {

      });
    };

    Equipos.Post = function (data, scope) {
      Equipos.Res.save({
        notify: true
      }, data, function (resp) {
        console.log(resp);
        if (resp.statusCode == 200) {
          scope.Modal = {
            classBtn: 'btn btn-success',
            classDiv: 'modal-dialog modal-notify modal-success',
            Texto: 'Se Ha Registrado Satisfactoriamente',
            Link : '#!/Equipos'
          };
        } else {
          scope.Modal = {
            classBtn: 'btn btn-danger',
            classDiv: 'modal-dialog modal-notify modal-danger',
            Texto: 'Ha Ocurrido Un Error Verifique Los Datos Ingresados',
            Link : '#!/EquiposReg'
          };
        }
      }, function (error) {
        console.log(error);
        scope.Modal = {
          classBtn: 'btn btn-danger',
          classDiv: 'modal-dialog modal-notify modal-danger',
          Texto: 'Ha Ocurrido Un Error Vuelva A Intentar',
          Link : '#!/EquiposReg'
        };
      });
      $('#Modal').modal('show')
    }

    return Equipos;
  })

  .controller("EquipoController", function ($scope, Equipos) {
    $scope.Equipos = Equipos.getAll();
    $scope.Array = {};
    $scope.Post = function () {
      if ($scope.form.$valid) {
        console.log($scope.Array);
        Equipos.Post($scope.Array, $scope);
      }
    }
  });