const eqObjects = function(object1, object2) {
    let lengthone = Object.keys(object1).length;
    let lengthtwo = Object.keys(object2).length;
    let firstkeys = Object.keys(object1);
    if (lengthone !== lengthtwo) {
      return false;
    } else {
      for (let key of firstkeys) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  
  const assertObjectsEqual = function(actual, expected) {
    const checkmark = '✅';
    const error = "❌";
    const inspect = require('util').inspect;
    if (JSON.stringify(actual) == JSON.stringify(expected)) {
      console.log(checkmark, checkmark, checkmark, `Assertion Passed: ${inspect(actual)} === ${inspect(obj2)}`);
    } else if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      console.log(error, error, error, `Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
    }
  };
  
  //console.log(`Example label: ${inspect(actual)}`);
  
  const obj1 = {
    a: "1",
    b: "2",
    c: "3",
    d: "4"
  };
  const obj2 = {
    a: "1",
    b: "22",
    c: "3",
    d: "4"
  };
  console.log(assertObjectsEqual(eqObjects(obj1, obj2), true));
  console.log(assertObjectsEqual(eqObjects({
    a: "1",
    b: "22",
    c: "3",
    d: "4"
  }, obj2), true));
  console.log(assertObjectsEqual(eqObjects({
    a: "2"
  }, obj2), true));
  

