const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");



//assertArrayEqual(middle([2]),[]);
//assertArrayEqual(middle([2, 3, 5, 11, 9, 10, 22]),[11]);
//assertArrayEqual(middle([2, 3, 4, 2, 5, 6]),[4,2]);

describe("#middle", () => {
    it("returns [11] for [2, 3, 5, 11, 9, 10, 22]", () => {
      assert.strictEqual(middle([2, 3, 5, 11, 9, 10, 22]), [11]);
    });
  });

  it("returns [4,2] for [2, 3, 4, 2, 5, 6]", () => {
    assert.strictEqual(middle([2, 3, 4, 2, 5, 6]), [4,2]);
  });
