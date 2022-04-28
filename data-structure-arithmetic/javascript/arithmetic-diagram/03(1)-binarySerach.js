function binarySearch(list, item, itemLow, itemHigh) {
  if (list.length <= 1) {
    return list.indexOf(item);
  }
  let low = itemLow || 0, high = itemHigh || list.length - 1;
  const mid = Math.floor((low + high) / 2);
  if (item === list[mid]) {
    return mid;
  } else if (item > list[mid]) {
    return binarySearch(list, item, mid + 1, high);
  } else {
    return binarySearch(list, item, low, mid - 1);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11], 11));