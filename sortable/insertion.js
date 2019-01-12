class InsertionSort {
  static sort(array) {
    for (let i = 1; i < array.length; i += 1) {
      const currentValue = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > currentValue) {
        array[j + 1] = array[j]; // eslint-disable-line
        j -= 1;
      }
      array[j + 1] = currentValue; // eslint-disable-line
    }
    return array;
  }
}

module.exports = InsertionSort;
