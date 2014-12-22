'use strict';

angular.module('mobileDemo')
  .controller('QiitaCtrl', function ($scope, $ionicLoading, $http) {

    var show_load = function(){
      $ionicLoading.show({
        template: 'Loading...',
        duration: 1000
      });
    };

    var load = function(){
      // 本当は Factory 等に切り出した方がよいが今回は省略
      $http.get('https://qiita.com/api/v1/items?per_page=30').success(function(items) {
        $scope.items = items;
      });
    };

    $scope.items = [];
    show_load();
    load();

    $scope.reload = function(){
      $scope.items = [];
      show_load();
      load();
    };

  });
