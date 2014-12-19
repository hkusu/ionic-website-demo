'use strict';

angular.module('mobileDemo')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
