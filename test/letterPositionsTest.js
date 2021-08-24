const assert = require('chai').assert;
const letterPositions  = require('../letterPositions');

describe("#letterPositions", () => {
  it(`should return [3, 5, 15, 18] for the position of "h" in "lighthouse in the house"`, () => {
    assert.deepEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
  });
});