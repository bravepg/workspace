import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Dispatcher = require('flux').Dispatcher;
var dispatcher = new Dispatcher();
var redux = require('redux');
var mobx = require('mobx');

class App extends Component {
  componentDidMount() {
    // flux demo
    var store1 = {
      name: 'bj',
      changeName: function (text) {
        this.name = text;
      },
      getData: function () {
        return this.name;
      },
    };

    var store2 = {
      count: 0,
      addOne: function () {
        this.count += 1;
      },
      getData: function () {
        return this.count;
      },
    };

    function handler1(action) {
      if (action.type === 'CHANGE_NAME') {
        store1.changeName(action.payload);
      }
    };

    function handler2(action) {
      if (action.type === 'ADD_ONE') {
        store2.addOne();
      }
    };

    dispatcher.register(handler1);
    dispatcher.register(handler2);
    dispatcher.dispatch({
      type: 'CHANGE_NAME',
      payload: 'mt && dp'
    });
    dispatcher.dispatch({
      type: 'CHANGE_NAME',
      payload: 'sh'
    });
    dispatcher.dispatch({
      type: 'ADD_ONE',
    });

    console.log('flux demo');
    console.log(store1.getData());    // sh
    console.log(store2.getData());    // 1

    // redux demo
    var reducer1 = function (state={name: 'bj'}, action) {
      switch (action.type) {
        case 'CHANGE_NAME':
          return {
            name: action.payload
          };
        
        default:
          return state;
      }
    };

    var reducer2 = function (state={count: 0}, action) {
      switch (action.type) {
        case 'ADD_ONE':
          return {
            count: state.count + 1
          };
        
        default:
          return state;
      }
    };

    var rootReducer = redux.combineReducers({
      obj1: reducer1,
      obj2: reducer2,
    });

    var store = redux.createStore(rootReducer);
    store.subscribe(function () {
      console.log('store is ', store.getState());
    });
    console.log('redux demo');
    store.dispatch({
      type: 'CHANGE_NAME',
      payload: 'sh'
    });

    store.dispatch({
      type: 'ADD_ONE',
    });

    // mobx demo
    var todo = mobx.observable({
      list: [],
      get listLength() {
        return this.list.length;
      },
    });

    mobx.autorun(function () {
      console.log('todo number: ', todo.listLength);
    });

    var addItem = function(text) {
      todo.list.push(text)
    }
    console.log('mobx demo');
    addItem('beijing')
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
