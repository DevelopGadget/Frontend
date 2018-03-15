"use strict"
angular.module("App", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        console.log('routeando');
        $routeProvider.when('/', {
                templateUrl: 'index.html',
                controller: 'IndexController'
            })

            .when('/Equipos', {
                templateUrl: '/pages/Equipos.html',
                controller: 'ControllerEquipo'
            })

            .when('/EquiposReg', {
                templateUrl: '/pages/EquiposReg.html',
                controller: 'EquipoController'
            })

            .when('/Jugadores', {
                templateUrl: '/pages/Jugadores.html',
                controller: 'ControllerJugadores'
            })

            .when('/JugadoresReg', {
                templateUrl: '/pages/JugadoresReg.html',
                controller: 'ControllerJugadores'
            })

            .otherwise({
                redirectTO: '/'
            });

            $locationProvider.html5Mode({
                enable: true,
                requireBase: false
              });
    })
    .controller("IndexController", ["$scope", function (sp) {

    }]);