function binarySearch(list, item) {
  if (list.length <= 1) {
    return list.indexOf(item);
  }
  let low = 0, high = list.length - 1;
  const mid = Math.floor((low + high) / 2);
  if (item === list[mid]) {
    return mid;
  } else if (item > list[mid]) {
    return binarySearch(list.splice(mid + 1, high), item);
  } else {
    return binarySearch(list.splice(0, mid - 1), item);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));