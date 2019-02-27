import React from 'react';

// const Store = {
//   _flag: false,
//   setFlag(value) {
//     this._flag = value;
//   },
//   getFlage() {
//     return this._flag;
//   }
// }
// class Unidireactional extends React.Component {
//   state ={
//     flag: true,
//   }

//   handleClick = () => {
//     this.setState({
//       flag: !this.state.flag
//     }, () => {
//       this.props.onChange(this.state.flag)
//     })
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.flag ? 'turn on': 'turn off'}
//       </button>
//     )
//   }
// }

// function App() {
//   return <Unidireactional onChange={Store.setFlag.bind(Store)} />
// }


// 上面的代码我们的数据流是这个样子的
// button -> Unidireactional -> Store


// 现在出现这样的情况，我们 Unidireactional 是来自于 Store，如何修改呢？

// class Unidireactional extends React.Component {
//   state = {
//     flag: this.props.value,
//   }

//   handleClick = () => {
//     this.setState({
//       flag: !this.state.flag
//     }, () => {
//       this.props.onChange(this.state.flag)
//     })
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.flag ? 'turn on': 'turn off'}
//       </button>
//     )
//   }
// }

// function App() {
//   return <Unidireactional value={Store.getFlage()} onChange={Store.setFlag.bind(Store)} />
// }

// 上面的代码我们的数据流是这个样子的
// button -> Unidireactional <-> Store
// 就变成了双向数据流，我们的操作会直接去修改 Store 中的数据


// 利用 flux 的思想，我们可以把改变 Store 的这个操作放在 Store 中，从而数据源变成单一的
const Store = {
  _flag: '',
  callback: [],
  subscribe(fn) {
    this.callback.push(fn);
  },
  setFlag(value) {
    console.log('value', value)
    this._flag = value;
    this.callback.forEach(fn => fn(value));
  },
  getFlage() {
    return this._flag;
  }
}

class Unidireactional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    }
    Store.subscribe(value => this.setState( { value } ));
  }

  handleClick = () => {
    this.props.onChange(!this.state.value)
  }

  render() {
    console.log('Store.getFlage()', Store.getFlage())
    return (
      <button onClick={this.handleClick}>
        {this.state.value ? 'turn on': 'turn off'}
      </button>
    )
  }
}

function App() {
  return <Unidireactional value={Store.getFlage()} onChange={Store.setFlag.bind(Store)} />
}

export default App;