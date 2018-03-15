'use strict'

angular.module('appRoutes', ['ngRoute'])

  .config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {        
      })

      .when('/Equipos', {
        templateUrl: 'pages/Equipos.html',
        controller: 'ControllerEquipo'
      })

      .when('/EquiposReg', {
        templateUrl: 'pages/EquiposReg.html',
        controller: 'ControllerEquipo'
      })

      .when('/Jugadores', {
        templateUrl: 'pages/Jugadores.html',
        controller: 'ControllerJugadores'
      })

      .when('/JugadoresReg', {
        templateUrl: 'pages/JugadoresReg.html',
        controller: 'ControllerJugadores'
      })

      .otherwise({
        redirectTO: '/'
      });

    $locationProvider.html5Mode({
      enable: true,
      requireBase: false
    });
  });

