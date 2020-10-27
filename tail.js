const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  console.log(arr.slice(1));

};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const nothing = ["something"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));
console.log(assertEqual(nothing.length, 0));
