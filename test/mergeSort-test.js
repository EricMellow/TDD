const arrayGenerator = require('../test/array-generator.js');
const splitArray = require('../lib/mergeSort.js');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require("chai-sorted"));

describe('splitArray', () => {

  it('should sort a small array of numbers', () => {
    const thisArray = [5, 4, 3, 2, 1, 9, 8, 7, 6];

    let sortedArray = splitArray(thisArray);

    assert.deepEqual(sortedArray, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should sort a small array of numbers with duplicate values', () => {
    const thisArray = [5, 4, 3, 8, 2, 1, 9, 8, 7, 6, 3];

    let sortedArray = splitArray(thisArray);

    assert.deepEqual(sortedArray, [1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9]);
  });

  it('should sort a small array of letters', () => {
    const thisArray = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

    let sortedArray = splitArray(thisArray);

    assert.deepEqual(sortedArray, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

  it('should sort a small array of letters with duplicate values', () => {
    const thisArray = ['j', 'i', 'h', 'c', 'g', 'f', 'e', 'd', 'c', 'h', 'b', 'a'];

    let sortedArray = splitArray(thisArray);

    assert.deepEqual(sortedArray, ['a', 'b', 'c', 'c', 'd', 'e', 'f', 'g', 'h', 'h', 'i', 'j']);
  });

  it('should sort a very large array', () => {
    const thisArray = arrayGenerator(800000);

    let sortedArray = splitArray(thisArray);

    expect(sortedArray).to.be.sorted()
  });

});