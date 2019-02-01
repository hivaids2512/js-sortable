class CoutingSort {
  static sort(array, max) {
    const sortedArray = [];
    const counting = [];

    // Step 1: create couting array
    for (let i = 0; i <= max; i += 1) {
      counting[i] = 0;
    }

    // Step 2: Couting appearance of each item.
    for (let i = 0; i < array.length; i += 1) {
      counting[array[i]] += 1;
    }

    // Step 3: Add 2 consecutive items in counting array.
    for (let i = 1; i < counting.length; i += 1) {
      counting[i] = counting[i] + counting[i - 1]; // eslint-disable-line
    }

    // Step 4: Iterate over the original array, for each iteam,
    // find the value of that in counting array, push to new array.
    for (let i = 0; i < array.length; i += 1) {
      sortedArray[counting[array[i]] - 1] = array[i];
    }

    return sortedArray;
  }
}

module.exports = CoutingSort;
