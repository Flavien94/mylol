app.controller('SearchCtrl', function($scope, $state, $http, $templateCache) {
  // Inscription
  var link;
  $scope.Search = function(name) {
    console.log(name);
    if (name) {
        link = 'http://localhost/mylol/php/index.php';
        $http.post(link, {data: name}).then(function(res) {
          console.log(res.data);
          $scope.infos = res.data;
        });
      } else {
      $scope.error = "";
      $scope.error = "Remplissez tous les champs";
    }
  };
});
