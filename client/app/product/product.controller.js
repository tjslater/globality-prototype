'use strict';

angular.module('globalityApp')
    .controller('ProductCtrl', function ($scope, Product, $state) {
      if (Product.list.length === 0) {
        Product.get(Product.page).then(function (data) {
          $scope.products =  data;
        });
      }

      $scope.loadMore = function(){
        Product.get(Product.page).then(function (data) {
          $scope.products = $scope.products.concat(data);
        });
      }

      $scope.$state = $state;

    });
