const assert = require('assert');
const make = require('../src/make');

describe('Make function', () => {
  const sum = (a, b) => a + b;
  const multi = (a, b) => a * b;

  it('should be able to sum with a single input param', () => {
    assert.equal(make(15)(34)(41)(sum), 90);
  });

  it('should be able to sum with a multiple input params', () => {
    assert.equal(make(1)(2, 3, 4)(5)(sum), 15);
  });

  it('should be able to multiply with a single input param', () => {
    assert.equal(make(15)(34)(41)(multi), 20910);
  });

  it('should be able to multiply with a multiple input params', () => {
    assert.equal(make(1)(2, 3, 4)(5)(multi), 120);
  });
});
