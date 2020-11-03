const assertArrayEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");

//// FUNCTION IMPLEMENTATION
//const assertEqual = function(actual, expected) {
//  return JSON.stringify(actual) == JSON.stringify(expected);
//}

function middle(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let calculation = i / (arr.length - 1);
    if (arr.length < 3) {
      return newArray;
    } else if (i / (arr.length - 1) === 0.5) {
      newArray.push(arr[i]);
    } else if (i / arr.length === 0.5) {
      newArray.push(arr[i - 1], arr[i]);
    }
  }
  return newArray;
}

module.exports = middle;
