const { expect } = require('chai');
const { CountingSort } = require('../../index');

const array = [4, 1, 3, 2, 5, 9, 14, 8, 0, 7];
const sortedArray = [0, 1, 2, 3, 4, 5, 7, 8, 9, 14];

describe('Counting sort', () => {
  it('Array must be sorted', () => {
    const sArray = CountingSort.sort(array, 14);
    expect(sArray).to.eql(sortedArray);
  });
});
