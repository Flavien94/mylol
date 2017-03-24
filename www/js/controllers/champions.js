app.controller('ChampsCtrl', function($scope, $state, $http) {
  $('.load').buttonLoader('start');
  $scope.query = {};
  $scope.queryBy = 'name';
  $http({
    method: 'GET',
    url: 'http://flavien-medina.fr/mylol/php/champions.php'
  }).then(function(response) {
    console.log('ok');
    $scope.champions = response.data;
    console.log($scope.champions);
    if ($scope.champions != "") {
      setTimeout(function() {
        $("#lod").addClass('hide');
        $(".load").buttonLoader('stop');
      }, 1000);
    }
  }, function(response) {
    console.log(response.data, response.status);
  });
  // $http({
  //     method: 'GET',
  //     url: 'http://localhost/mylol/php/champions.php'
  // }).then(function (response) {
  //   console.log('ok');
  //     $scope.freeChamp = response.data;
  //     console.log($scope.freeChamp);
  // }, function (response) {
  //     console.log(response.data,response.status);
  // });
});
