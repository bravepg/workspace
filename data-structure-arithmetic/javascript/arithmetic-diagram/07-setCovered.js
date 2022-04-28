let stateNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
  one: new Set(['id', 'nv', 'ut']),
  two: new Set(['wa', 'id', 'mt']),
  three: new Set(['or', 'nv', 'ca']),
  four: new Set(['nv', 'ut']),
  five: new Set(['ca', 'az']),
};

const finalStations = [];

// while (stateNeeded.size) {
//   let bestState = null;
//   let stateCovered = new Set([]);
//   for (const state in stations) {
//     const covered = new Set([...stateNeeded].filter(x => stations[state].has(x)));

//     if (covered.size > stateCovered.size) {
//       bestState = state;
//       stateCovered = covered;
//     }
//   }
//   finalStations.push(bestState);

//   stateNeeded = new Set([...stateNeeded].filter(x => !stateCovered.has(x)));
  
//   console.log('stateNeeded', bestState, stateNeeded)
// }

function calcState(stateNeeded) {
  if (!stateNeeded.size) {
    return;
  }

  let bestState = null;
  let stateCovered = new Set([]);
  for (const state in stations) {
    const covered = new Set([...stateNeeded].filter(x => stations[state].has(x)));

    if (covered.size > stateCovered.size) {
      bestState = state;
      stateCovered = covered;
    }
  }
  finalStations.push(bestState);

  const newStateNeeded = new Set([...stateNeeded].filter(x => !stateCovered.has(x)));

  calcState(newStateNeeded);
}

calcState(stateNeeded);

console.log(finalStations);
