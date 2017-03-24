app.controller('SummCtrl', function($scope, $state, $http, $templateCache) {
  var link;
  $scope.Search = function(name) {
    if (name) {
      $('.search').buttonLoader('start');
      console.log(name);
      $scope.error = "";
      $scope.infos = "";
      $scope.stats = "";
      link = 'http://www.flavien-medina.fr/mylol/php/index.php';
      $http.post(link, {
        data: name
      }).then(function(res) {
        console.log(res.data);
        $scope.infos = res.data;
        var stats = 'http://www.flavien-medina.fr/mylol/php/stats.php';
        $http.post(stats, {
          data: name
        }).then(function(res) {
          console.log(res.data);
          $scope.stats = res.data;
          if ($scope.stats != "" && $scope.infos != "") {
            $(".search").buttonLoader('stop');
          }
          if (!Array.isArray($scope.stats) && !Array.isArray($scope.infos)) {
            $scope.error = "Summoner Inconnu";
          }
        });
      });
    } else {
      $scope.error = "";
      $scope.error = "Remplissez tous les champs";
    }
  };
});
