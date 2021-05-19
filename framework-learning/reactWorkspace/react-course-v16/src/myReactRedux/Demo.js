import React from 'react';
import bindActionCreator from '../myRedux/bindActionCreators';
import { createStore } from '../myRedux/index';
import { Provider, connect } from './index';

function reducer(state, action) {
  if (!state) {
    state = {
      count: 0,
    };
  }
  switch (action.type) {
    case 'add':
      return {...state, count: ++state.count};
    default:
      return state;
  }
}

const store = createStore(reducer);

class SuperClass extends React.Component {
  render() {
    return <Middleware/>
  }
}

class Middleware extends React.Component {
  render() {
    return <ConnectSubClass />
  }
}

class SubClass extends React.Component {
  componentDidMount() {
    this.props.actions.add();
  }
  render() {
    return (
      <span>count: {this.props.count}</span>
    )
  }
}

function mapStateToprops(store) {
  return {
    count: store.count,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreator({
      add: () => {
        return {
          type: 'add',
        }
      },
    }, dispatch),
  }
}

const ConnectSubClass = connect(mapStateToprops, mapDispatchToProps)(SubClass);

export default function() {
  return (
    <Provider store={store}>
      <SuperClass />
    </Provider>
  )
};