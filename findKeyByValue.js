// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
const findKeyByValue = function(obj, value) {
    let keys = Object.keys(obj);
    for(let key of keys) {
        if(obj[key] === value) {
            return key;
        } 
    }
}


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
  console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));