(function(){
    "use strict"
   modul.controller("IndexController", ["$scope", function (sp) {
        if (localStorage.getItem('user') != null) {
            $location.path('/paginauser')
            console.log(localStorage.getItem('user'))
            return;
        }
    }]);
});