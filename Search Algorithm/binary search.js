function binarySearch(arr, n) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (n === arr[middleIndex]) {
      return middleIndex + 1;
    }
    if (n < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 2));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
