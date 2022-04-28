function quickSort(list) {
  if (list.length < 2) {
    return list;
  }

  const item = list.shift();
  const leftArr = list.filter(it => it <= item);
  const rightArr = list.filter(it => it > item);

  return quickSort(leftArr).concat(item).concat(quickSort(rightArr));
}

console.log(quickSort([10, 30, 20]));