import React, { useState, useEffect } from 'react';

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // 保存新回调
//   useEffect(() => {
//     savedCallback.current = callback;
//   });

//   // 建立 interval
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

function App() {
  const [count, setCount] = useState(0);
  console.log('app render', count);

  // https://stackoverflow.com/questions/54715188/react-hook-rendering-an-extra-time
  // 关于 app render 为什么会执行多次的解释 react-fiber
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //     console.log('interval render');
  //   }, 5000);
  // }, []);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
      console.log('interval render');
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <button> count { count }</button>
    </React.Fragment>
  )
}

export default App;