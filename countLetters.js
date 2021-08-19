// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = function(sentence) {
  
  let output = {};
  let sentenceNoSpace = sentence.replace(/\s/g, '');
  for (let letter of sentenceNoSpace) {
    if (!output[letter]) {
      output[letter] = 1;
    } else {
      output[letter] += 1;
    }
  }
  return output;
};


console.log(countLetters(('LHL'),{L: 2, H: 1}));
assertEqual((countLetters('LHL')),{L: 2, H: 1});

console.log(countLetters(('lighthouse labs')));

