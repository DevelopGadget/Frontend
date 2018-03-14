"use strict"
angular.module("App", ["ngRoute", "../"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
                templateUrl: '../index.html',
                controller: 'IndexController'
            })

            .when('/Equipos', {
                templateUrl: '../Equipos.html',
                controller: 'ControllerEquipo'
            })

            .when('/EquiposReg', {
                templateUrl: '../EquiposReg.html',
                controller: 'EquipoController'
            })

            .when('/Jugadores', {
                templateUrl: '../Jugadores.html',
                controller: 'ControllerJugadores'
            })

            .when('/JugadoresReg', {
                templateUrl: '../JugadoresReg.html',
                controller: 'ControllerJugadores'
            })

            .otherwise({
                redirectTO: '/'
            });
    })
    .controller("IndexController", ["$scope", function (sp) {
        sp.title = "PROBANDO";
    }]);