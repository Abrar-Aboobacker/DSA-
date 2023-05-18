function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortredArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortredArr.push(leftArr.shift());
    } else {
      sortredArr.push(rightArr.shift());
    }
  }
  return [...sortredArr, ...leftArr, ...rightArr];
}

const arr = [8, -7, 1, 3, -77, 0];
console.log(mergeSort(arr));
