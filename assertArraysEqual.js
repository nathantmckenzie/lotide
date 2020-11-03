const eqArrays = require("./eqArrays");



// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
    if (JSON.stringify(actual)==JSON.stringify(expected)) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else if (JSON.stringify(actual)!==JSON.stringify(expected)) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  
  // TEST CODE
  console.log(assertArrayEqual([1, 1, 0],[1, 0, 1]));
  console.log(assertArrayEqual([1, 1],[1,1]));
  console.log(assertArrayEqual(["some text"],["some text"]));

  module.exports = assertArrayEqual;
