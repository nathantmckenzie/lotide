const without = function(source, itemsToRemove) {
    let num = parseInt(itemsToRemove.toString());
    let str = itemsToRemove.toString();
    for (let i = 0; i < source.length; i++) {
      if (source[i] === num) {
        source.slice(i, 1);
      } else if (source[i] === str) {
        source.slice(i, 1);
      }
    }
    return source;
  }
  const assertArrayEqual = function(actual, expected) {
    if (JSON.stringify(actual) == JSON.stringify(expected)) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  
  console.log(without(["3", 2, 4, "5"], ["5"]));
  console.log(without([23, 42, 55, 2], [23]));
  console.log(without([3, 4, 1, 5], []));
  
  const words = ["hello", "world", "lighthouse"];
  console.log(without(words, ["lighthouse"]));
  console.log(assertArrayEqual(words, ["hello", "world", "lighthouse"]));