(function(){
  "use strict"
  .controller("JugadoresController", ["$scope", "$http", function (sp, http) {
    sp.Jugadores = [];
    http.get("https://api-net.herokuapp.com/api/Jugadores")
      .then(function (data) {
        sp.Jugadores = data.data;
      }, function (err) {

      });
  }]);
});
