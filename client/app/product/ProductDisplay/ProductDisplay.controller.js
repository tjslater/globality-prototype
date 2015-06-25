'use strict';

angular.module('globalityApp')
  .controller('ProductDisplayCtrl', function ($scope, $state, Product) {
      Product.getItemById($state.params.id).then(function(data){
        $scope.item = data;
        console.log(data);
      })
  });
