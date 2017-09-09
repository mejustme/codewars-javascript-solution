//  https://www.codewars.com/kata/unique-in-order/train/javascript
const assert = require('assert');

// my
var uniqueInOrder = function(iterable) {
  return (Object.prototype.toString.apply(iterable) == '[object Array]'
    ? iterable
    : iterable.split('')).filter(function(val) {
    var curIndex = arguments[1],
        arr = arguments[2];
    return val !== arr[curIndex - 1];
  });
};

// clever
var uniqueInOrder1 = function(iterable) {
  return [].filter.call(iterable, function(current, index) {
    return iterable[index - 1] !== current;
  });
};

// best
var uniqueInOrder2 = function(iterable) {
  var i, last, result = [];
  for (i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i]);
    }
  }
  return result;
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


  it('AAAABBBCCDAABBB', function() {
    assert.deepEqual(uniqueInOrder1('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
  });
  it('ABBCcAD', function() {
    assert.deepEqual(uniqueInOrder1('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
  });
  it('[1,2,2,3,3]', function() {
    assert.deepEqual(uniqueInOrder1([1, 2, 2, 3, 3]), [1, 2, 3]);
  });


  it('AAAABBBCCDAABBB', function() {
    assert.deepEqual(uniqueInOrder2('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
  });
  it('ABBCcAD', function() {
    assert.deepEqual(uniqueInOrder2('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
  });
  it('[1,2,2,3,3]', function() {
    assert.deepEqual(uniqueInOrder2([1, 2, 2, 3, 3]), [1, 2, 3]);
  });
});
