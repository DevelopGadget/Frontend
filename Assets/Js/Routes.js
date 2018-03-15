"use strict"
angular.module("appRoutes", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    console.log('routeando');
    $routeProvider.when('/', {
        templateUrl: '/pages/index.html',
        controller: 'IndexController as IndexController'
      })

      .when('/Equipos', {
        templateUrl: '/pages/Equipos.html',
        controller: 'EquipoController as EquipoController'
      })

      .when('/EquiposReg', {
        templateUrl: '/pages/EquiposReg.html',
        controller: 'EquipoController'
      })

      .when('/Jugadores', {
        templateUrl: '/pages/Jugadores.html',
        controller: 'JugadoresController'
      })

      .when('/JugadoresReg', {
        templateUrl: '/pages/JugadoresReg.html',
        controller: 'JugadoresController'
      })

      .otherwise({
        redirectTO: '/'
      });

    $locationProvider.html5Mode({
      enable: true,
      requireBase: false
    });
  });