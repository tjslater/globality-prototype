'use strict';

describe('Directive: productList', function () {

  // load the directive's module and view
  beforeEach(module('globalityApp'));
  beforeEach(module('app/product/productList/productList.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product-list></product-list>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the productList directive');
  }));
});