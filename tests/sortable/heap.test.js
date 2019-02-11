const { expect } = require('chai');
const { HeapSort } = require('../../index');

const array = [4, 1, 3, 2, 5, 9, 14, 8, -3, 7];
const sortedArray = [-3, 1, 2, 3, 4, 5, 7, 8, 9, 14];

describe('Heap sort', () => {
  it('Array must be sorted', () => {
    const sArray = HeapSort.sort(array);
    expect(sArray).to.eql(sortedArray);
  });
});
