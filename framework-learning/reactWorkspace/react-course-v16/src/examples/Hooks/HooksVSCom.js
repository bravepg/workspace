import React, { useEffect, useReducer } from 'react';

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   componentDidUpdate() {
//     setTimeout(() => {
//       console.log('this.state.count', this.state.count);
//     }, 3000);
//   }
//   render() {
//     return (
//       <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>count {this.state.count}</button>
//     );
//   }
// }

// 上面的 class 相当于直接修改 this.state，输出的是最后一次变化的值
// 而对于 hooks 来说，他每次的渲染都是唯一的 props 和 state，因此具有 capture value 的特性
// function Home() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       console.log('count', count);
//     }, 3000);
//   })
//   return (
//     <button onClick={() => { setCount(count + 1) }}>count {count}</button>
//   )
// }

// 如果希望避免这种情况，可以使用 useRef
// function Home() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(count);
//   useEffect(() => {
//     countRef.current = count;
//     setTimeout(() => {
//       console.log('count', countRef.current);
//     }, 3000);
//   })
//   return (
//     <button onClick={() => { setCount(count + 1) }}>count {count}</button>
//   )
// }

// 使用 useReducer 作弊模式
function Home() {
  const inintialState = { count: 0 };
  function reducer(state, action) {
    switch(action.type) {
      case 'tick':
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, inintialState);
  const count = state.count;
  useEffect(() => {
    setInterval(() => {
      dispatch({
        type: 'tick',
      })
    }, 3000);
  }, []);
  return (
    <button>count {count}</button>
  )
}
export default Home;