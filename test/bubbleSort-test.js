const arrayGenerator = require('../test/array-generator.js');
const bubbleSort = require('../lib/bubbleSort.js');
const assert = require('chai').assert;

describe('bubbleSort', () => {

  it('should sort a small array of numbers', () => {
    const thisArray = [5, 4, 3, 2, 1, 9, 8, 7, 6];

    let sortedArray = bubbleSort(thisArray);

    assert.deepEqual(sortedArray, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  
  it('should sort a small array of numbers with duplicate values', () => {
    const thisArray = [5, 4, 3, 8, 2, 1, 9, 8, 7, 6, 3];

    let sortedArray = bubbleSort(thisArray);

    assert.deepEqual(sortedArray, [1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9]);
  });
  
  it('should sort a small array of letters', () => {
    const thisArray = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

    let sortedArray = bubbleSort(thisArray);

    assert.deepEqual(sortedArray, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });
  
  it('should sort a small array of letters with duplicate values', () => {
    const thisArray = ['j', 'i', 'h', 'c', 'g', 'f', 'e', 'd', 'c', 'h', 'b', 'a'];

    let sortedArray = bubbleSort(thisArray);

    assert.deepEqual(sortedArray, ['a', 'b', 'c', 'c', 'd', 'e', 'f', 'g', 'h', 'h', 'i', 'j']);
  });

  it('should sort a very large array', () => {
    const thisArray = arrayGenerator(11000);

    let sortedArray = bubbleSort(thisArray);

    assert.deepEqual(sortedArray, thisArray.sort());
  });

});