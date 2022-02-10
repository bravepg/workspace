const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['end'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['end'] = 5;

graph['end'] = {};

const costs = {}
costs['a'] = 6;
costs['b'] = 2;
costs['end'] = Infinity;

const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['end'] = null;

const processed = [];


function findLowestCostNode(costs) {
  let min = Infinity;
  let node = null;

  Object.keys(costs).forEach((key) => {
    if (costs[key] < min && !processed.includes(key)) {
      min = costs[key];
      node = key;
    }
  });

  return node;
}

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  const neighbors = graph[node];

  Object.keys(neighbors).forEach((key) => {
    const newCost = cost + neighbors[key];

    if (costs[key] > newCost) {
      costs[key] = newCost;
      parents[key] = node;
    }
  });

  processed.push(node);

  node = findLowestCostNode(costs);
}

console.log('node', costs, parents);
