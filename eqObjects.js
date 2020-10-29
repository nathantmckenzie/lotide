// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };



 const eqObjects = function(object1, object2) {
   let lengthone = Object.keys(object1).length;
   let lengthtwo = Object.keys(object2).length;
   let firstkeys = Object.keys(object1);
   if(lengthone !== lengthtwo) {
     return false;
   } else {
     for(let key of firstkeys) {
       if(object1[key] !== object2[key]) {
         return false;
       }
     }
   }
   return true;
  }

console.log(assertEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2"}),true));
console.log(assertEqual(eqObjects({ a: "1", b: "2" }, { a: "3", b: "2", c: "3"}),true));
console.log(assertEqual(eqObjects({ a: "1", b: "2" }, { a: "1"}),true));
console.log(assertEqual(eqObjects({ a: "1", b: "2" }, { a: "333", b: "2"}),true));
  

