const utils = require('../sortable/utils');

class HeapSort {
  static buildMaxHeap(array) {
    let middleIndex = Math.floor(array.length / 2);
    while (middleIndex >= 0) {
      this.heapify(array, middleIndex, array.length);
      middleIndex -= 1;
    }
  }

  static heapify(array, startIndex, endIndex) {
    let copiedStartIndex = startIndex;
    while (copiedStartIndex < endIndex) {
      let maxIndex = copiedStartIndex;

      const leftIndex = this.left(maxIndex);
      const rightIndex = this.right(maxIndex);

      if (leftIndex < endIndex && array[maxIndex] < array[leftIndex]) {
        maxIndex = leftIndex;
      }

      if (rightIndex < endIndex && array[maxIndex] < array[rightIndex]) {
        maxIndex = rightIndex;
      }

      if (copiedStartIndex === maxIndex) {
        return;
      }

      utils.swap(array, copiedStartIndex, maxIndex);
      copiedStartIndex = maxIndex;
    }
  }

  static left(i) {
    return 2 * i + 1;
  }

  static right(i) {
    return this.left(i) + 1;
  }

  static parent(i) {
    return (i - 1) / 2;
  }
}

module.exports = HeapSort;
