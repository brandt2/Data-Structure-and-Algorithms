function binarySearch(array, target) {
  if (array.length === 0) return false; // same as (!array.length)

  let midIdx = Math.floor(array.length/2);
  let leftArray = array.slice(0, midIdx);
  let rightArray = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftArray, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightArray, target);
  } else {
    return true;
  }
}

console.log(binarySearch([1,4,5,8,19,24], 20)); // false
