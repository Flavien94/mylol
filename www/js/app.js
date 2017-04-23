var app = angular.module('starter', ['ionic', 'ui.router']);
app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(1);
  $ionicConfigProvider.backButton.text('');
});
app.controller('MainCtrl', function($scope, $state) {
  setTimeout(function() {
    $("#load-app").fadeOut(500, function() {
      $("#load-app").toggleClass('hide');
    });
  }, 3000);
});
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/summoners.html',
      controller: 'SummCtrl'
    })
    .state('champs', {
      url: '/champs',
      templateUrl: './templates/champions.html',
      controller: 'ChampsCtrl'
    });

  $urlRouterProvider.otherwise('/');
});
