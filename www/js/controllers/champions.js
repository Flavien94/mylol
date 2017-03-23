app.controller('ChampsCtrl',function ($scope, $state, $http){
  $scope.query = {};
  $scope.queryBy = 'name';
  $http({
    method: 'GET',
    url: 'http://www.flavien-medina.fr/mylol/php/test.php'
  }).then(function (response) {
    console.log('ok');
    $scope.champions = response.data;
    console.log($scope.champions);
  }, function (response) {
    console.log(response.data,response.status);
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
