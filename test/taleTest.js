const tail = require("../tail");
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//assertEqual(tail(words), [ 'Lighthouse', 'Labs' ]);
//assertEqual(tail(nothing.length, 0));


describe("#head", () => {
    it("returns [ 'Lighthouse', 'Labs' ] for ['YoYo','Lighthouse','Labs']", () => {
      assert.strictEqual(tail(['YoYo','Lighthouse','Labs']), [ 'Lighthouse', 'Labs' ]);
    });
  });

  it("returns 'something' for ['something']", () => {
    assert.strictEqual(tail(['something']), 'something');
  });

  