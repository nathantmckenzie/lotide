// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  function head(arr) {
     console.log(arr[0]);

  }
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("something","something");
  assertEqual("onething","anotherthing");
  assertEqual(123,123);
  assertEqual(13123,2342);

assertEqual(head([5]));
assertEqual(head([]));