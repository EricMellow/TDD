function splitArray(array) {

  if (array.length === 1) {
    return array;
  }

  let arrayMiddle = Math.floor(array.length / 2);
  let array1 = array.slice(0, arrayMiddle);
  let array2 = array.slice(arrayMiddle);

  return mergeArray(splitArray(array1), splitArray(array2));
}

function mergeArray(array1, array2) {
  let i = 0;
  let j = 0;
  let sortedArray = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sortedArray.push(array1[i]);
      i++;
    } else {
      sortedArray.push(array2[j]);
      j++;
    }
  }
  return [...sortedArray, ...array1.splice(i), ...array2.splice(j)];
}

module.exports = splitArray;