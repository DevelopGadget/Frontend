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

    Equipos.ReadAll = function (scope) {
      return Equipos.Res.query(function (data) {
        scope.mostrar = true;
      }, function (error) {

      });
    };

    Equipos.Read = function (id) {
      return Equipos.Res.get({
        id: id
      }, function (data) {
      }, function (error) {

      });
    };

    Equipos.Create = function (data, scope) {
      Equipos.Res.save({
        notify: true
      }, data, function (resp) {
        console.log(resp);
        if (resp.statusCode == 200) {
          Equipos.Modal('btn btn-success', 'modal-dialog modal-notify modal-success', 'Se Ha Creado Satisfactoriamente', '#!/Equipos', scope);
        } else {
          Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Verifique Los Datos Ingresados', '#!/Equipos', scope);
        }
      }, function (error) {
        console.log(error);
        Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos', scope);
      });
      $('#Modal').modal('show')
    }

    Equipos.Remove = function (id, scope) {
      Equipos.Res.delete({
        id: id
      }, function (resp) {
        console.log(resp);
        if (resp.statusCode == 200) {
          Equipos.Modal('btn btn-success', 'modal-dialog modal-notify modal-success', 'Se Ha Eliminado Satisfactoriamente', '#!/Equipos', scope);
        } else {
          Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos', scope);
        }
      }, function (error) {
        Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos', scope);
      });
      $('#Modal').modal('show')
    }

    Equipos.Update = function (id, data, scope) {
        Equipos.Res.put({id : id}, data, function(resp){
          console.log(resp);
          if (resp.statusCode == 200) {
            Equipos.Modal('btn btn-success', 'modal-dialog modal-notify modal-success', 'Se Ha Modificado Satisfactoriamente', '#!/Equipos', scope);
          }else{
            Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos', scope);
          }
        },function(error){
          Equipos.Modal('btn btn-danger', 'modal-dialog modal-notify modal-danger', 'Ha Ocurrido Un Error Vuelva A Intentar', '#!/Equipos', scope);
        });
        $('#Modal').modal('show')
    }

    Equipos.Modal = function (classBtn, classDiv, Texto, Link, scope) {
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
    $scope.Equipos = Equipos.ReadAll($scope);
    $scope.Array = {};

    if (String($routeParams.id) !== '' && String($routeParams.id) !== null && $routeParams.id !== undefined) {
      $scope.copia = Equipos.Read(String($routeParams.id));
      $scope.Equipo = Equipos.Read(String($routeParams.id));
      $('#select').modal('show')
    }

    $('#select').on('hidden.bs.modal', function () {
      $window.location.href = "#!/Equipos";
    });

    $scope.Create = function () {
      if ($scope.form.$valid) {
        console.log($scope.Array);
        Equipos.Create($scope.Array, $scope);
      }
    }

    $scope.Delete = function (id) {
      if (id !== '' && id !== null) {
        $scope.select = {};
        Equipos.Remove(id, $scope);
      }
    }

    $scope.Update = function (id, data){
      if(id !== '' &&  id !== null && $scope.form.$valid){
        console.log({
          sNombre : data.sNombre,
          sEstadio : data.sEstadio,
          uEscudo : data.uEscudo,
          uEstadio : data.uEstadio
        });
        Equipos.Update(id, {
          sNombre : data.sNombre,
          sEstadio : data.sEstadio,
          uEscudo : data.uEscudo,
          uEstadio : data.uEstadio
        }, $scope);
        $scope.select = {};
        $scope.copia = {};
      }
    }

  });