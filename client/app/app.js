'use strict';

angular.module('globalityApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'infinite-scroll',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/product');

    $locationProvider.html5Mode(true);
  });