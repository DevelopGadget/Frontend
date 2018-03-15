"use strict"
var modul = angular.module("App", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    console.log('routeando');
    $routeProvider.when('/', {
        templateUrl: '/pages/index.html',
        controller: 'IndexController'
      })

      .when('/Equipos', {
        templateUrl: '/pages/Equipos.html',
        controller: 'EquipoController'
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