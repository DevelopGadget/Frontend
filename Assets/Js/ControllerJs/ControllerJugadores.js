angular.module('JugadoresController', [])

  .factory('Jugadores', function ($resource) {
    var Jugadores = {};
    Jugadores.Res = $resource('https://api-net.herokuapp.com/api/Jugadores/:id', {
      id: "@id"
    }, {
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

    Jugadores.ReadAll = function (scope) {
      return Jugadores.Res.query(function (data) {
        scope.mostrar = true;
        console.log(data);
      });
    };

    Jugadores.Read = function (id) {
      return Jugadores.Res.get({
        id: id
      }, function (data) {}, function (error) {

      })
    };

    Jugadores.Create = function (data, scope) {
      Jugadores.Res.save({
        notify: true
      }, data, function (resp) {
        console.log(resp.statusCode);
        if (resp.statusCode == 200) {
          Jugadores.Modal('btn btn-success', 'modal-dialog modal-notify modal-success', 'Se Ha Creado Satisfactoriamente', '#!/Jugdores', scope);
        } else {
          Jugadores.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Verifique Los Datos Ingresados', '#!/Jugadores', scope);
        }
      }, function (error) {
        Jugadores.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Jugadores', scope);
      });
      $('#Modal').modal('show')
    }

    
    Jugadores.Remove = function (id, scope) {
      Jugadores.Res.delete({
        id: id
      }, function (resp) {
        console.log(resp);
        if (resp.statusCode == 200) {
          Jugadores.Modal('btn btn-success', 'modal-dialog modal-notify modal-success', 'Se Ha Eliminado Satisfactoriamente', '#!/Jugadores', scope);
        } else {
          Jugadores.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Jugadores', scope);
        }
      }, function (error) {
        Jugadores.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Jugadores', scope);
      });
      $('#Modal').modal('show')
    }

    Jugadores.Modal = function (classBtn, classDiv, Texto, Link, scope) {
      scope.Modal = {
        classBtn: classBtn,
        classDiv: classDiv,
        Texto: Texto,
        Link: Link
      };
    }

    return Jugadores;
  })

  .controller('JugadoresController', function ($scope, Jugadores, $routeParams, $window, $http) {
    $scope.mostrar = false;
    $scope.Jugadores = Jugadores.ReadAll($scope);
    $http.get('https://api-net.herokuapp.com/api/Equipos').then(function (resp) {
      $scope.Equipos = resp.data;
      $scope.mostrar = true;
    }, function (error) {
      Jugadores.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Jugadores', scope);
      $('#select').modal('show');
    });

    if (String($routeParams.id) !== '' && String($routeParams.id) !== null && $routeParams.id !== undefined) {
      $scope.copia = Jugadores.Read(String($routeParams.id));
      $scope.Jugador = Jugadores.Read(String($routeParams.id));
      $('#select').modal('show');
    }
    $('#select').on('hidden.bs.modal', function () {
      $window.location.href = "#!/Jugadores";
    });

    $scope.Create = function () {
      if ($scope.form.$valid) {
        console.log("post");
        Jugadores.Create($scope.Array, $scope);
      }
    }

    $scope.Delete = function (id) {
      if (id !== '' && id !== null) {
        $scope.select = {};
        Jugadores.Remove(id, $scope);
      }
    }

  });