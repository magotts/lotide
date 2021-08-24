const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let output = {};
  for (let letter of sentence) {
    if (!output[letter]) {
      output[letter] = 1;
    } else {
      output[letter] += 1;
    }
  }
  return output;
};

// const result1 = countLetters('lhl');
// const result2 = countLetters('lighthouse');
assertEqual(countLetters('lhl').l, 2);
assertEqual(countLetters('lighthouse').h, 2);
