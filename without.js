// FUNCTION IMPLEMENTATION
// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1,arr2)) {
//     console.log(`Assertion Passed: ${arr1} === ${arr2}`);
//   } else
//     console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
// };

// const eqArrays = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   } return true;
// };

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i of source) {
    if (!(itemsToRemove.includes(i))) {
      result.push(i);
    }
  }
  return result;
};


module.exports = without;