const graph = {
  root: ['a', 'b'],
  a: ['c', 'd'],
  b: ['e', 'f'],
};

// function breadthFirst(graph) {
//   const queue = [];
//   queue.push(...graph.root);
//   while (queue.length) {
//     const item = queue.shift();
//     if (item === 'f') {
//       return item;
//     } else if (graph[item]?.length) {
//       queue.push(...graph[item]);
//     }
//   }
//   return null;
// }

// 递归
const queue = [];
function breadthFirst(key) {
  queue.push(...(graph[key] || []));
  if (!queue.length) {
    return null;
  }
  const item = queue.shift();
  if (item === 'f') {
    return item;
  }
  return breadthFirst(item);
}

console.log(breadthFirst('root'));
