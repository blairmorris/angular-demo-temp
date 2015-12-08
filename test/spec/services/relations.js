'use strict';

describe('Service: relations', function () {

  // load the service's module
  beforeEach(module('iqApp'));

  // instantiate service
  var relations;
  beforeEach(inject(function (_relations_) {
    relations = _relations_;
  }));

  it('should do something', function () {
    expect(!!relations).toBe(true);
  });

});
