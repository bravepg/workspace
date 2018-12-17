import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
// import logo from './logo.svg';
import './App.css';

const enhancer = applyMiddleware(
  function({ dispatch }) {
    return function(next) {
      return function(action) {
        console.log('m1', next);
        next(action);
      }
    }
  },
  function({ dispatch }) {
    return function(next) {
      return function(action) {
        console.log('m2', next);
        next(action);
      }
    }
  },
  function({ dispatch }) {
    return function(next) {
      return function(action) {
        console.log('logger');
        console.log('m3', next);
        next(action);
      }
    }
  }
);

const store = createStore(function(state = { test: 'a' }, action) {
  if (action.type === 'TEST') {
    return Object.assign({}, state, { test: 'b' });
  }
  return state;
}, enhancer);

store.dispatch({ type: 'TEST' });

// const logger = createLogger();
//
// const defaultState = 0;
// const defaultState2 = 2;
// // function functionName() {
// //   return {a: 1}
// // };
//
// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return state + action.text;
//     default:
//       return state;
//   }
// };
//
// const reducer2 = (state = defaultState2, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return state + action.text;
//     default:
//       return state;
//   }
// };
//
// const reducerAll = combineReducers({
//   reducer,
//   reducer2
// })
//
// const store = createStore(
//   reducerAll,
//   applyMiddleware(logger)
// );
//
// // action
// // View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦
// // const action = {
// //   type: 'ADD_TODO',
// //   payload: 'Learn Redux'
// // };
// // 定义一个函数来生成Action，叫做Action Creator
// const ADD_TODO = 'ADD';
// function addTodo(text) {
//   return {
//     type: ADD_TODO,
//     text
//   }
// }
//
// const action = addTodo('Learn Redux');
//
// // 触发action的唯一方法
// // 接受action对象作为参数
// // store.dispatch({
// //   type: 'ADD_TODO',
// //   payload: 'Learn Redux'
// // });
// console.log(store.getState());
// store.dispatch(action);
//
// console.log(store.getState());
// window._store = store;

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

class A extends Component {
  render() {
    return (
      <div>这是A组件</div>
    );
  }
}
console.log(A);

App.childContextTypes = {
  name: PropTypes.string,
  print: PropTypes.func
};

export default App;
