function insertionSort(array) {
  let sortedArray = [];

  while (array.length > 0) {
    sortedArray.push(array.shift());
    for (let j = sortedArray.length - 1; j > 0; j--) {
      if (sortedArray[j] < sortedArray[j - 1]) {
        [sortedArray[j], sortedArray[j - 1]] = [sortedArray[j - 1], sortedArray[j]];
      }
    }
  }
  return sortedArray;
}

module.exports = {
  insertionSort
};