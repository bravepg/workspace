import React, { useState, useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState({
    number: 0,
  });
  const initData = () => {
    console.log('initData');
  }
  useEffect(() => {
    initData();
  }, []);
  return (
    <div>
      <p>You clicked {count.number} times</p>
      <button onClick={() => setCount({
        ...count,
        number: count.number + 1
      })}>
        Click me
      </button>
    </div>
  );
}

// function Container(props) {
//   return (
//     <div>You clicked {props.number} time</div>
//   )
// }

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <Container number={this.state.number} />
//         <button onClick={() => { this.setState({
//           number: this.state.number  + 1,
//         }) }}>
//          Click me
//        </button>
//       </div>
//     )
//   }
// }

export default Example;