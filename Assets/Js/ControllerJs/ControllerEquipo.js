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
        'delete': {
          method: 'DELETE'
        },
        'put': {
          method: 'PUT'
        }
      });

    Equipos.getAll = function (scope) {
      return Equipos.Res.query(function (data) {
        console.log(data);
        scope.mostrar = true;
      }, function (error) {

      });
    };

    Equipos.get = function (id) {
      return Equipos.Res.get({
        id: id
      }, function (data) {
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
          Equipos.Modal('btn btn-success', 'modal-dialog modal-notify modal-success', 'Se Ha Registrado Satisfactoriamente', '#!/Equipos')
        } else {
          Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Verifique Los Datos Ingresados', '#!/Equipos');
        }
      }, function (error) {
        console.log(error);
        Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos');
      });
      $('#Modal').modal('show')
    }

    Equipos.Remove = function (id, scope) {
      Equipos.Res.delete({
        id: id
      }, function (resp) {
        console.log(resp);
        if (resp.statusCode == 200) {
          Equipos.Modal('btn btn-success', 'modal-dialog modal-notify modal-success', 'Se Ha Eliminado Satisfactoriamente', '#!/Equipos');
        } else {
          Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos');
        }
      }, function (error) {
        Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos');
      });
      $('#Modal').modal('show')
    }

    Equipos.Modal = function (classBtn, classDiv, Texto, Link) {
      scope.Modal = {
        classBtn: classBtn,
        classDiv: classDiv,
        Texto: Texto,
        Link: Link
      };
    }

    return Equipos;
  })

  .controller("EquipoController", function ($scope, Equipos, $routeParams, $window) {

    $scope.mostrar = false;
    $scope.Equipos = Equipos.getAll($scope);
    $scope.Array = {};

    if (String($routeParams.id) !== '' && String($routeParams.id) !== null && $routeParams.id !== undefined) {
      $scope.select = Equipos.get(String($routeParams.id));
      $('#select').modal('show')
    }

    $('#select').on('hidden.bs.modal', function () {
      $window.location.href = "#!/Equipos";
    });

    $scope.Post = function () {
      if ($scope.form.$valid) {
        console.log($scope.Array);
        Equipos.Post($scope.Array, $scope);
      }
    }

    $scope.Eliminar = function (id) {
      if (id !== '' && id !== null) {
        $scope.select = {};
        Equipos.Remove(id, $scope);
        scope.Modal = {
          classBtn: 'btn btn-success',
          classDiv: 'modal-dialog modal-notify modal-success',
          Texto: 'Se Ha Eliminado Satisfactoriamente',
          Link: '#!/Equipos'
        };
      }
    }

  });