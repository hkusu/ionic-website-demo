'use strict';

angular.module('mobileDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ionic'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.top', {
        url: '/top',
        templateUrl: 'app/top/top.html',
        controller: 'TopCtrl'
      })
      .state('main.setting', {
        url: '/setting',
        templateUrl: 'app/setting/setting.html',
        controller: 'SettingCtrl'
      })
    ;
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })
;
