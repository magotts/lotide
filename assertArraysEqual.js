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

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([2,2,3],[1,1,3]);