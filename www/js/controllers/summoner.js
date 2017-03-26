app.controller('SummCtrl', function($scope, $state, $http, $templateCache) {
  var link;
  $scope.Search = function(name) {
    if (name) {
      $('.search').buttonLoader('start');
      console.log(name);
      $scope.error = "";
      $scope.dataS = "";
      $scope.dataI = "";
      $scope.load = "";
      link = 'http://www.flavien-medina.fr/mylol/php/index.php';
      $http.post(link, {
        data: name
      }).then(function(res) {
        $scope.dataI = res.data;
        for (var i = 0; i < res.data.length; i++) {
          $scope.infos = res.data[i];
          console.log(res.data[i]);
        }
        var stats = 'http://www.flavien-medina.fr/mylol/php/stats.php';
        $http.post(stats, {
          data: name
        }).then(function(res) {
          $scope.dataS = res.data;
          console.log(res.data);
          for (var i = 0; i < res.data.length; i++) {
            $scope.stats = res.data[i];
            console.log(res.data[i]);
          }
          if ($scope.stats != "" && $scope.infos != "") {
            $(".search").buttonLoader('stop');
            $scope.load = true;
          }
          if (!Array.isArray($scope.dataS) && !Array.isArray($scope.dataI)) {
            $scope.error = "Summoner introuvable";
          }
        });
      });
    } else {
      $scope.error = "";
      $scope.error = "Remplissez le champ";
    }
  };
});
