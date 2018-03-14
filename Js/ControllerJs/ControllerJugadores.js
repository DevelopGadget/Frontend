angular.module("Jugadores", [])
  .controller("Body", ["$scope", "$http", function (sp, http) {
    sp.Jugadores = [];
    http.get("https://api-net.herokuapp.com/api/Jugadores")
      .then(function (data) {
        sp.Jugadores = data.data;
      }, function (err) {

      });
  }]);