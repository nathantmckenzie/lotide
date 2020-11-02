const assertEqual = require("./assertEqual");

  function head(arr) {
     console.log(arr[0]);

  }
  

assertEqual(head([5]));
assertEqual(head([]));

module.exports = head;