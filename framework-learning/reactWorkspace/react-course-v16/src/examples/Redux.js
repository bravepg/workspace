// https://github.com/ecmadao/Coding-Guide/tree/master/Notes/React/Redux
// https://juejin.im/entry/584fa596ac502e0069391b99
// reducer 必须是纯函数
// 因为我们的 react 组件 会多次接受 store 传入 props
// 理论上来说，每一次都应该是一个全新的对象引用，而不是同一个引用
// 比如我们需要比较两次传入的props，利用 componentWillReciveProps（nextProps） 比较this.props 跟nextProps
// 如果引用不变，则无法判断更新
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { applyMiddleware, createStore, combineReducers } from '../myRedux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

const loggerMiddleware  = createLogger();

// const enhancer = applyMiddleware(
//   function({ dispatch }) {
//     return function(next) {
//       return function(action) {
//         console.log('m1', next);
//         next(action);
//       }
//     }
//   },
//   function({ dispatch }) {
//     return function(next) {
//       return function(action) {
//         console.log('m2', next);
//         next(action);
//       }
//     }
//   },
//   function({ dispatch }) {
//     return function(next) {
//       return function(action) {
//         console.log('logger');
//         console.log('m3', next);
//         next(action);
//       }
//     }
//   },
//   loggerMiddleware
// );

// const store = createStore(function(state = { test: 'a' }, action) {
//   if (action.type === 'TEST') {
//     return Object.assign({}, state, { test: 'b' });
//   }
//   return state;
// }, enhancer);

// store.dispatch({ type: 'TEST' });

// const logger = createLogger();
//
const defaultState = { a: 0 };
const defaultState2 = { b: 0 };
// // function functionName() {
// //   return {a: 1}
// // };
//
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      // 不纯的函数 禁止使用
      // state.a = state.a + action.number;
      // return state;
      return {...state, a: state.a + action.number}
    default:
      return state;
  }
};

const reducer3 = (state = defaultState2, action) => {
  switch (action.type) {
    case 'ADD':
      // 不纯的函数 禁止使用
      // state.b = state.b + action.number;
      // return state;
      return {...state, b: state.b + action.number}
    default:
      return state;
  }
};

const reducerAll = combineReducers({
  reducer,
  reducer3
})

const store = createStore(
  reducerAll,
  applyMiddleware(loggerMiddleware)
);

// action
// View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦
// const action = {
//   type: 'ADD_TODO',
//   payload: 'Learn Redux'
// };
// 定义一个函数来生成Action，叫做Action Creator
const ADD_TODO = 'ADD';
function addTodo(number) {
  return {
    type: ADD_TODO,
    number
  }
}

const action = addTodo(2);

// 触发action的唯一方法
// 接受action对象作为参数
// store.dispatch({
//   type: 'ADD_TODO',
//   payload: 'Learn Redux'
// });
console.log(store.getState());
store.dispatch(action);

console.log(store.getState());
window._store = store;

class Children extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.context.name
    };
  }
  render() {
    return(
      <ul>
        <li>
          {`child context is: ${this.context.age}`}
        </li>
        <li>
          {`state from context: ${this.state.name}`}
        </li>
        <li>
          {`print age: ${this.context.print(this.context.age)}`}
        </li>
      </ul>
    );
  }
}
Children.contextTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  print: PropTypes.func
};


class Parent extends Component {
  getChildContext() {
    return {
      name: 'mars1',
      age: 18
    };
  }
  render() {
    return (
      <div>
        {`from App component: ${this.context.name}`}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Parent.contextTypes = {
  name: PropTypes.string
};
Parent.childContextTypes = {
  age: PropTypes.number,
  name: PropTypes.string
};

class App extends Component {
  getChildContext() {
    return {
        name: 'mars',
        print: (m) => m
     };
  }
  render() {
    return (
      <Parent>
        <Children />
      </Parent>
    );
  }
}

App.childContextTypes = {
  name: PropTypes.string,
  print: PropTypes.func
};

export default App;
