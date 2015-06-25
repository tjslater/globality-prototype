'use strict';

angular.module('globalityApp')
  .directive('productList', function (Product) {
    return {
      templateUrl: 'app/product/productList/productList.html',
      scope: {
        products: "=",
        loadMore: "&"
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {

      }
    };
  });