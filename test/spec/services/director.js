'use strict';

describe('Service: director', function () {

  // load the service's module
  beforeEach(module('iqApp'));

  // instantiate service
  var director;
  beforeEach(inject(function (_director_) {
    director = _director_;
  }));

  it('should do something', function () {
    expect(!!director).toBe(true);
  });

});
