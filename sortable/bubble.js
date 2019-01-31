const utils = require('./utils');

class BubbleSort {
  static sort(array) {
    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < array.length - i; j += 1) {
        if (array[j] > array[j + 1]) {
          utils.swap(array, j, j + 1);
        }
      }
    }
    return array;
  }
}

module.exports = BubbleSort;
