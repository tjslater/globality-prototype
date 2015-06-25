'use strict';

angular.module('globalityApp')
    .config(function ($stateProvider) {
      $stateProvider
          .state('product', {
            url: '/product',
            templateUrl: 'app/product/product.html',
            controller: 'ProductCtrl'
          })
          .state('product.display', {
            url: '/:id',
            views: {
              'item': {
                templateUrl: 'app/product/productDisplay/product-display.html',
                controller: 'ProductDisplayCtrl'
              }
            }
          });
    });