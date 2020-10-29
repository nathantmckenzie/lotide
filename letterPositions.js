const assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) == JSON.stringify(expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertEqual = function(actual, expected) {
  return JSON.stringify(actual) == JSON.stringify(expected);
}

//iterate through the sentence
//create an array for each element (character)
//push the index of that character to it's respective array

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
}

console.log(letterPositions("hello"));
console.log(letterPositions("backwards"));
console.log(letterPositions("something"));
