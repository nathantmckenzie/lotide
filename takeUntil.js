const assertArrayEqual = function(actual, expected) {
  if (JSON.stringify(actual)==JSON.stringify(expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (JSON.stringify(actual)!==JSON.stringify(expected)) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};






const takeUntil = function(array, callback) {
    let arr = [];
    for(let number of array) {
      if(callback(number) === false) {
        arr.push(number);
      } else {
        return arr;
      }
    }
  }



   const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
   const results1 = takeUntil(data1, x => x < 0);
   assertArrayEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results2, ["I've","been","to","Hollywood"]);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]