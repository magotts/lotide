const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it(`return true if [1, 2, 3] is equal to [1, 2, 3]`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it(`return false if [1, 2, 3] is not equal to [3, 2, 1]`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it(`return false if ["1", "2", "3"] is not equal to ["1", "2", "3"]`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it(`return false if ["1", "2", "3"] is not equal to ["1", "2", 3]`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});
