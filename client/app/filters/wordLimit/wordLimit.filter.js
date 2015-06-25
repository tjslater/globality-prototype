'use strict';

angular.module('globalityApp')
  .filter('wordLimit', function () {
    return function (input, limit) {
      return input.split(' ').splice(0, limit).join(' ');
    };
  });
