// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
    } else {
      console.log(`Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
    }
  };
  
  
  
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("something","something");
  assertEqual("onething","anotherthing");
  assertEqual(123,123);
  assertEqual(13123,2342);