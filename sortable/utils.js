exports.swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j]; // eslint-disable-line
  array[j] = temp; // eslint-disable-line
};
