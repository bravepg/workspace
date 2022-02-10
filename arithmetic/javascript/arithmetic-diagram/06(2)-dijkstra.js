const processed1 = [];
const processed2 = [];
const graph1 = {
  start: {
    a: 5,
    b: 2,
  },
  a: {
    c: 4,
    d: 2,
  },
  b: {
    a: 8,
    d: 7,
  },
  c: {
    d: 6,
    end: 3,
  },
  d: {
    end: 1,
  },
  end: {},
}
const costs1 = {
  a: 5,
  b: 2,
  c: Infinity,
  d: Infinity,
  end: Infinity,
}
const parents1 = {
  a: 'start',
  b: 'start',
  c: null,
  d: null,
  end: null,
}

const graph2 = {
  start: {
    a: 10,
  },
  a: {
    b: 20,
  },
  b: {
    c: 1,
    end: 30,
  },
  c: {
    b: 1,
  },
  end: {},
}

const costs2 = {
  a: 10,
  b: Infinity,
  c: Infinity,
  end: Infinity,
}
const parents2 = {
  a: 'start',
  b: null,
  c: null,
  end: null,
}

function findLowestCostNode(costs, processed) {
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

function getCost(graph, costs, parents, processed) {
  let node = findLowestCostNode(costs, processed);
  if (node === null) {
    return [costs, parents];
  }

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
  return getCost(graph, costs, parents, processed);
}

console.log(getCost(graph1, costs1, parents1, processed1));
console.log(getCost(graph2, costs2, parents2, processed2));
