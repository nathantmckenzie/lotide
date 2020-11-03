const tail = require("../tail");
const assertEqual = require('../assertEqual');


assertEqual(tail(words), [ 'Lighthouse', 'Labs' ]);
assertEqual(tail(nothing.length, 0));