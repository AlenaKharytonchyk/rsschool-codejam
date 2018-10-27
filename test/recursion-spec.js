const assert = require('assert');
const recursion = require('../src/recursion');

describe('Recursion function', () => {
  const testData = [
    {
      tree: {
        value: 100,
        left: { value: 90, left: { value: 70 }, right: { value: 99 } },
        right: { value: 120, left: { value: 110 }, right: { value: 130 } },
      },
      array: [[100], [90, 120], [70, 99, 110, 130]],
    },
    { tree: {}, array: [] },
  ];

  testData.forEach((data) => {
    it('should work as expected', () => {
      assert.deepEqual(recursion(data.tree), data.array);
    });
  });
});
