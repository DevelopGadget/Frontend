'use strict'

angular.module('myApp', ['appRoutes', 'ControllerEquipo', 'ControllerJugadores'])
  .controller('myController', function ($scope, $location) {
    
    $scope.title = 'HAAA';
   

  });


// angular.module('myApp', []).