// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
    if (JSON.stringify(actual) == JSON.stringify(expected)) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // FUNCTION IMPLEMENTATION
  const assertEqual = function(actual, expected) {
    return JSON.stringify(actual) == JSON.stringify(expected);
  }
  
  const words = ["ground", "control", "to", "major", "tom"];
  
  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }
  
  const results1 = map(words, word => word[0]);
  const results2 = map(words, word => word.length);
  const results3 = map(words, word => word.split("").reverse().join(""));
  console.log(assertArrayEqual(results1, ["g", "c", "t", "m", "t"]));
  console.log(assertArrayEqual(results2, [6, 7, 2, 5, 3]));
  console.log(assertArrayEqual(results3, ["dnuorg", "lortnoc", "ot", "rojam", "mot"]));
  