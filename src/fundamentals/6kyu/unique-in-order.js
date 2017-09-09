//  https://www.codewars.com/kata/unique-in-order/train/javascript
const assert = require('assert');
var uniqueInOrder = function(iterable) {
  return (Object.prototype.toString.apply(iterable) == '[object Array]'
    ? iterable
    : iterable.split('')).filter(function(val) {
    var curIndex = arguments[1],
        arr = arguments[2];
    return val !== arr[curIndex - 1];
  });
};

describe('uniqueInOrder', function() {
  it('AAAABBBCCDAABBB', function() {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
  });
  it('ABBCcAD', function() {
    assert.deepEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
  });
  it('[1,2,2,3,3]', function() {
    assert.deepEqual(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
  });
});
