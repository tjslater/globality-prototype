'use strict';

angular.module('globalityApp')
  .factory('Product', function ($http) {

      var product = {};
      product.list = [];
      product.page = 1;
      product.get = function(page){
        return $http.get('api/products/' + page).then(function(response){
          product.page++;
          product.list = product.list.concat(response.data);
          return response.data;
        });
      };
      product.getItemById = function(id){
        return $http.get('api/products/product/' + id).then(function(response){
          return response.data;
        })
      };

    return product;
  });
