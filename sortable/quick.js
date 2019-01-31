const utils = require('./utils');

class QuickSort {
  static sort(array, criteria) {
    const c = criteria || 'middle';
    return this.quickSort(array, 0, array.length - 1, c);
  }

  static quickSort(array, left, right, criteria) {
    if (array.length > 1) {
      const pivotIndex = this.partition(array, left, right, criteria);
      if (left < pivotIndex - 1) {
        this.quickSort(array, left, pivotIndex - 1, criteria);
      }
      if (pivotIndex < right) {
        this.quickSort(array, pivotIndex, right, criteria);
      }
    }
    return array;
  }

  static partition(array, left, right, criteria) {
    let pivotIndex;
    switch (criteria) {
      case 'left':
        pivotIndex = left;
        break;
      case 'right':
        pivotIndex = right;
        break;
      default:
        pivotIndex = Math.floor((left + right) / 2);
        break;
    }
    let l = left;
    let r = right;
    while (l <= r) {
      while (array[l] < array[pivotIndex]) {
        l += 1;
      }

      while (array[r] > array[pivotIndex]) {
        r -= 1;
      }

      if (l <= r) {
        utils.swap(array, l, r);
        l += 1;
        r -= 1;
      }
    }
    return l;
  }
}

module.exports = QuickSort;
