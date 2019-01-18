class MergeSort {
  static sort(array) {
    return this.mergeSort(array);
  }

  static mergeSort(array) {
    if (array.length === 1) {
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  static merge(left, right) {
    let i = 0;
    let j = 0;
    let result = []; // eslint-disable-line
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i += 1;
      } else {
        result.push(right[j]);
        j += 1;
      }
    }

    while (i < left.length) {
      result.push(left[i]);
      i += 1;
    }

    while (j < right.length) {
      result.push(right[j]);
      j += 1;
    }
    return result;
  }
}

module.exports = MergeSort;
