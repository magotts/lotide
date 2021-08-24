const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it(`returns 2 l's from "lhl"`, () => {
    assert.deepEqual(countLetters('lhl').l, 2);
  });

  it(`returns 2 h's from "lighthouse"`, () => {
    assert.deepEqual(countLetters("lighthouse").h, 2);
  });

});
