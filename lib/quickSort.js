function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.pop();
  const smallerArray = [];
  const largerArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      smallerArray.push(array[i])
    } else {
      largerArray.push(array[i])
    }
  }

  return [...quickSort(smallerArray), pivot, ...quickSort(largerArray)]
}

module.exports = quickSort;