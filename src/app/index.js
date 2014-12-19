'use strict';

angular.module('mobileDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ionic'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.top', {
        url: '/top',
        views: {
          'menuContent': {
            templateUrl: 'app/top/top.html',
            controller: 'TopCtrl'
          }
        }
      })
      .state('main.content', {
        url: '/content',
        views: {
          'menuContent': {
            templateUrl: 'app/content/content.html',
            controller: 'ContentCtrl'
          }
        }
      })
      .state('main.setting', {
        url: '/setting',
        views: {
          'menuContent': {
            templateUrl: 'app/setting/setting.html',
            controller: 'SettingCtrl'
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/main/top');

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  })
;
