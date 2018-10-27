const assert = require('assert');
const sumOfOthers = require('../src/sumOfOther');

describe('SumOfOthers function', () => {
  it('should return zero for an empty array', () => {
    assert.equal(sumOfOthers([]), 0);
  });
  it('should return result as expected for a valid array', () => {
    assert.deepEqual(sumOfOthers([1, 3, 5, 7, 9]), [24, 22, 20, 18, 16]);
  });
});
