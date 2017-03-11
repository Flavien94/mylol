app.controller('SearchCtrl', function($scope, $state, $http, $templateCache) {
  // Inscription
  var link;
  $scope.Search = function(name) {
    console.log(name);
    if (name) {
        $scope.infos = "";
        $scope.stats = "";
        link = 'http://www.flavien-medina.fr/mylol/php/index.php';
        $http.post(link, {data: name}).then(function(res) {
          console.log(res.data);
          $scope.infos = res.data;
        });
        var stats = 'http://www.flavien-medina.fr/mylol/php/stats.php';
        $http.post(stats, {data: name}).then(function(res) {
          console.log(res.data);
          $scope.stats = res.data;
        });
      } else {
      $scope.error = "";
      $scope.error = "Remplissez tous les champs";
    }
  };
});
