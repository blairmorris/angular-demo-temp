'use strict';

describe('Service: actor', function () {

  // load the service's module
  beforeEach(module('iqApp'));

  // instantiate service
  var actor;
  beforeEach(inject(function (_actor_) {
    actor = _actor_;
  }));

  it('should do something', function () {
    expect(!!actor).toBe(true);
  });

});
