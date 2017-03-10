app.controller('PostCtrl',function ($scope, $state, $http){
  $scope.$emit('token');
  console.log($scope.token);
  if (!$scope.token) {
    $state.go('home');
  }
  function getPost(){
      $http({
          method: 'GET',
          url: 'http://localhost:3000/getpost.php'
      }).then(function (response) {
          $scope.posts = response.data;
          console.log($scope.posts);
      }, function (response) {
          console.log(response.data,response.status);
      });
}
getPost();
window.setInterval(function(){
getPost();
}, 5000);
  $scope.PostIt = function(data) {
    console.log(data);
    if (data && data.post) {
        data.username = $scope.username;
        link = 'http://localhost:3000/post.php';
        $http.post(link, {data: data}).then(function(res) {
          console.log(res.data);
          if (res.data === 'true') {
              data.post = " ";
              getPost();
          }
        });
    } else {
      $scope.error = "";
    }
  };
});
