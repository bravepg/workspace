function binarySearch(list, item) {
  let mid, low = 0, high = list.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const current = list[mid];

    if (current === item) {
      return mid;
    } else if (current > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const list = [1, 3, 5, 7, 9];

console.log(binarySearch(list, 3));
console.log(binarySearch(list, 11));
