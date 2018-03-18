angular.module('JugadoresController', [])

  .factory('Jugadores', function ($resource) {
    var Jugadores = {};
    Jugadores.Res = $resource('https://api-net.herokuapp.com/api/Jugadores/:id', {
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

    Jugadores.ReadAll = function (scope) {
      return Jugadores.Res.query(function (data) {
        scope.mostrar = true;
        console.log(data);
      });
    };

    Jugadores.Read = function (id) {
      return Jugadores.Res.get({
        id: id
      }, function (data) {
      }, function (error) {

      })
    };

    Jugadores.Create = function (data) {
      return Jugadores.Res.save({
        data: data
      }, function (resp) {
        console.log(data);
      });
    }
    return Jugadores;
  })

  .controller('JugadoresController', function ($scope, Jugadores, $routeParams, $window) {
    $scope.mostrar = false;
    $scope.Jugadores = Jugadores.ReadAll($scope);
    $scope.Post = {};
    if (String($routeParams.id) !== '' && String($routeParams.id) !== null && $routeParams.id !== undefined) {
      $scope.copia = Jugadores.Read(String($routeParams.id));
      $scope.Jugador = Jugadores.Read(String($routeParams.id));
      $('#select').modal('show')
    }
    $('#select').on('hidden.bs.modal', function () {
      $window.location.href = "#!/Jugadores";
    });

    $scope.Create = function () {
      if($scope.form.$valid){
        Jugadores.Create(Post);
      }
    }
  });