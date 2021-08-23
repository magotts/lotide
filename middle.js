// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


let cut = [];
let newMid = [];
const middle = function(array) {
  if ((array.length % 2 === 0) && (array.length > 2)) { //even
    cut = (array.length / 2) - 1;
    newMid = array.slice(cut, cut + 2);
  } else if (array.length <= 2) { // less than 2
    return newMid;
  } else { // odd
    cut = Math.floor(array.length / 2);
    newMid = array.slice(cut,cut + 1);
  }
  return newMid;
};


module.exports = middle;