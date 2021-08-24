const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#countOnly", () => {
  it(`return "drama" if "The Wire" is selected for bestTVShowsByGenre`, () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });


  it(`return "drama" if "That '70s Show" is selected for bestTVShowsByGenre`, () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });


});