const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");



assertArrayEqual(middle([2]),[]);
assertArrayEqual(middle([2, 3, 5, 11, 9, 10, 22]),[11]);
assertArrayEqual(middle([2, 3, 4, 2, 5, 6]),[4,2]);
