"use strict"
angular.module("appRoutes", ["ngRoute"])
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

      .when('/Equipos/:id', {
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

      .when('/Jugadores/:id', {
        templateUrl: '/pages/Jugadores.html',
        controller: 'JugadoresController'
      })

      .when('/JugadoresReg', {
        templateUrl: '/pages/JugadorReg.html',
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