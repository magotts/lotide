const assert = require('chai').assert;
const countOnly   = require('../countOnly');


describe("#countOnly", () => {
  it(`returns Jason, 1 for ["Karl", "Jason", "Fang", "Fang", "Arnold"]`, () => {
    const firstNames = [
      "Karl", "Jason", "Fang", "Fang", "Arnold"];
    const result1 = countOnly(firstNames, { "Karl": true, "Jason": true, "Fang": true, "Arnold": false });
    assert.deepEqual(result1["Jason"], 1);
  });

  it(`returns Fang, 2 for ["Karl", "Jason", "Fang", "Fang", "Arnold"]`, () => {
    const firstNames = [
      "Karl", "Jason", "Fang", "Fang", "Arnold"];
    const result1 = countOnly(firstNames, { "Karl": true, "Jason": true, "Fang": true, "Arnold": false });
    assert.deepEqual(result1["Fang"], 2);
  });

  it(`returns Arnold, 2 for ["Karl", "Jason", "Fang", "Fang", "Arnold"]`, () => {
    const firstNames = [
      "Karl", "Jason", "Fang", "Fang", "Arnold"];
    const result1 = countOnly(firstNames, { "Karl": true, "Jason": true, "Fang": true, "Arnold": false });
    assert.deepEqual(result1["Arnold"], undefined);
  });
});