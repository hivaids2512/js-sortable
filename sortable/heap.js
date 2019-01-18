const utils = require('./utils');
const Heap = require('../ds/heap');

class HeapSort extends Heap {
  static sort(array) {
    return this.heapSort(array);
  }

  static heapSort(array) {
    this.buildMaxHeap(array);
    let lastIndex = array.length - 1;
    while (lastIndex > 0) {
      utils.swap(array, 0, lastIndex);
      this.heapify(array, 0, lastIndex);
      lastIndex -= 1;
    }
    return array;
  }
}

module.exports = HeapSort;
