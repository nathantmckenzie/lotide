// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  //we want results stored in an object
  //we want to iterate through all items 
  //if the item exists add one to it
  //if the item doesn't exist, make it equal to one
  //at the end, return the result
  const countOnly = function(allItems, itemsToCount) {
    const results = {};
  
    for (const item of allItems) {
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
      console.log(item);
    }
  
    return results;
  
  }
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
  });
  
  console.log(assertEqual(result1["Jason"], 1));
  console.log(assertEqual(result1["Karima"], undefined));
  
  console.log(countOnly(["hello", "world", "bob"], {"hello": true, "world": true}));
  


  

