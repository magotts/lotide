// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(words) {
  let output = words.slice(1, words.length);
  return output;
};

module.exports = tail;