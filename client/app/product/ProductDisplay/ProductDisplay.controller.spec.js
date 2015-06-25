'use strict';

describe('Controller: ProductDisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('globalityApp'));

  var ProductDisplayCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductDisplayCtrl = $controller('ProductDisplayCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
