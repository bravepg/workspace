import React from 'react';
// useCallback 的使用是为了防止 React 性能优化的失败

// 在最开始自己写 React 的时候，我可能会经常这样写
// function App() {
//   return (
//     <div>
//       <DoSomeThing style={{ fontSize: 14 }} doSomething={() => { console.log('doSomething') }} />
//     </div>
//   )
// }
// 上面的代码子组件 DoSomeThing 接受了 style、doSomething 两个 props
// 在 App 进行重新 render 的时候，每次都会生成新的 style、doSomething
// 即使 DoSomeThing 加了 PureComenponent，也会重新渲染
// 解决方式一般是这样
// const style = { fontSize: 14 };
// class App extends React.Component {
//   doSomeThing() {
//     console.log('doSomething');
//   }
//   render() {
//     return (
//       <div>
//         <DoSomeThing style={style} doSomething={ this.doSomeing } />
//       </div>
//     )
//   }
// }
// 将方法挂载到 this 上，将变量单独声明


// 但是 hooks 这种函数式写法显然不支持这种 因此 useCallback 出现了
// 为了清楚的展示 配合 Memo 一起使用

function App() {
  const [count, setCount] = React.useState(0);
  const memoizedHandleClick = React.useCallback(() => {
    console.log('Click happened', count);
  }, []); // 空数组代表无论什么情况下该函数都不会发生改变
  // 使用 useMemo 避免无效的更新，与 PureComenponent 功能相似
  const child = React.useMemo(() => <Child onClick={memoizedHandleClick} />, [memoizedHandleClick])
  return (
    <div>
      {/* <Child onClick={memoizedHandleClick} /> */}
      {child}
      <button onClick={() => setCount(count + 1) }>{count}</button>
    </div>
  )
}

function Child(props) {
  console.log('render');
  return (
    <button onClick={props.onClick}>Child</button>
  )
}

export default App;
