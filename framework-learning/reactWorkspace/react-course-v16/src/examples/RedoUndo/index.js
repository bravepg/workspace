import React from 'react';
import { createStore } from 'redux';

function undoable(reducer) {
  // 以一个空的 action 调用 reducer 来产生初始的 state
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
  }
  
  // 返回一个可以执行撤销和重做的新的reducer
  return function(state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case 'UNDO':
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        }
      case 'REDO':
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        }
      default:
        // 将其他 action 委托给原始的 reducer 处理
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        }
    }
  }
}

// 这是一个 reducer。
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text]
    default:
      return state;
  }
}

// 处理完成之后仍然是一个 reducer！
const undoableTodos = undoable(todos)

const store = createStore(undoableTodos)

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})

console.log(store.getState())

/**
 * 挑战1: 生命周期无法很好的追溯
 * 挑战2: 多个 reducer 会导致状态比较复杂
 */
store.dispatch({
  type: 'ADD_TODO',
  text: 'Implement Undo'
})
console.log(store.getState())

store.dispatch({
  type: 'UNDO'
})
console.log(store.getState())

store.dispatch({
  type: 'UNDO'
})
console.log(store.getState())

class App extends React.Component {
  render() {
    return <h2>
      Hello World
    </h2>
  }
}

export default App;