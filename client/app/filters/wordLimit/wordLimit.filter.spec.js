'use strict';

describe('Filter: wordLimit', function () {

  // load the filter's module
  beforeEach(module('globalityApp'));

  // initialize a new instance of the filter before each test
  var wordLimit;
  beforeEach(inject(function ($filter) {
    wordLimit = $filter('wordLimit');
  }));

  it('should return the input prefixed with "wordLimit filter:"', function () {
    var text = 'angularjs';
    expect(wordLimit(text)).toBe('wordLimit filter: ' + text);
  });

});
