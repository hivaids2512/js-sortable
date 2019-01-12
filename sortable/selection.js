const utils = require('./utils');

class SelectionSort {
  static sort(array) {
    for (let i = 0; i < array.length - 1; i += 1) {
      let min = i;
      for (let j = i + 1; j < array.length; j += 1) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      utils.swap(array, i, min);
    }
    return array;
  }

  static sortBy(array, field) {
    for (let i = 0; i < array.length - 1; i += 1) {
      let min = i;
      for (let j = i + 1; j < array.length; j += 1) {
        if (array[j][field] < array[min][field]) {
          min = j;
        }
      }
      utils.swap(array, i, min);
    }
    return array;
  }
}

module.exports = SelectionSort;
