var app = angular.module('starter', ['ionic', 'ui.router', 'angular-toArrayFilter']);
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
});
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/search.html',
      controller: 'SearchCtrl'
    })
    .state('champs', {
      url: '/champs',
      templateUrl: './templates/champions.html',
      controller: 'ChampsCtrl'
    });
    // .state('signup', {
    //   url: '/signup',
    //   templateUrl: './templates/signup.html',
    //   controller: 'LoginCtrl'
    // })
    // .state('post', {
    //   url: '/post',
    //   templateUrl: './templates/post.html',
    //   controller: 'PostCtrl'
    // });

  $urlRouterProvider.otherwise('/');
});
