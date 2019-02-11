const { expect } = require('chai');
const { QuickSort } = require('../../index');

const array = [4, 1, 3, 2, 5, 9, 14, 8, -3, 7];
const sortedArray = [-3, 1, 2, 3, 4, 5, 7, 8, 9, 14];

describe('Quick sort', () => {
  it('Array must be sorted', () => {
    const sArray = QuickSort.sort(array);
    expect(sArray).to.eql(sortedArray);
  });
});
