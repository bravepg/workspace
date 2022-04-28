// 递归找出列表中最大元素
function max(list) {
  if (list.length === 1) {
    return list.pop();
  }
  const value = list.pop();
  const other = max(list);
  return value > other ? value : other;
}

console.log(max([1, 2, 8, 6]));