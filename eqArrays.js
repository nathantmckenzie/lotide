// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    return JSON.stringify(actual)==JSON.stringify(expected);
  }
  
  
  
  // TEST CODE
  console.log(assertEqual([1, 1, 0],[1, 0, 1]));
  console.log(assertEqual([1, 1],[1,1]));
  console.log(assertEqual(["some text"],["some text"]));
  