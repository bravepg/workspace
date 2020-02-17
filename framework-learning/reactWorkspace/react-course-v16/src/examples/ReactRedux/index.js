import React, { createElement } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/src';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';

const initalState1 = {
  obj1: {
    info: {
      name: 'gao',
    }
  }
}

const initalState2 = {
  obj2: {
    info: {
      name: 'yao',
    }
  }
}

function reducer1(state = initalState1, action) {
  switch(action.type) {
    case 'CHANGE_INFO1':
      const newState = Object.assign({}, state, { obj1: { info: { age: 23 } } })
      return newState;
    default:
      return state;
  }
}

function reducer2(state = initalState2, action) {
  switch(action.type) {
    case 'CHANGE_INFO2':
        const newState = Object.assign({}, state, { obj2: { info: { age: 22 } } })
      return newState;
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  reducer1,
  reducer2,
}));

export default class ReactReduxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    }
  }
  render() {
    console.log('render')
    if (!this.renderedElement) {
      console.log('执行 renderedElement');
      this.renderedElement = createElement(Component4);
    }
    return (
      <Provider store={store}>
        <div>
          <Component1 />
          <Component2 />
          <Component3 />
          {this.renderedElement}
          {/* 父组件一旦重新渲染，子组件的 shouldComponentUpdate 必须返回 false 才不会重新渲染*/}
          <button onClick={() => {
            this.setState({
              number: this.state.number + 1,
            })
          }}>{this.state.number}</button>
        </div>
      </Provider>
    )
  }
}