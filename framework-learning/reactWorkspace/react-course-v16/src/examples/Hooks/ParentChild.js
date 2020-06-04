/**
 * 测试组件卸载仍然执行的 bug
 */

import React, { useState, useEffect, useMemo } from 'react';
function Child({ state }) {

  console.log('rerender');
  // 1. 执行 rerender 是为了进行 diff
  // 利用 useMemo 可以阻止进行 rerender
  useEffect(() => {
    console.log('子组件加载');
    return () => {
      console.log('子组件卸载');
    }
  // state 参数决定了是否卸载
  }, [state])

  return (
    <div>子组件-{state}</div>
  )
}

function Parent() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(1);
  }, []);

  const child = useMemo(() => <Child state={state} />, [state]);
  
  return (
    <>
      <button onClick={() => setState(state + 1)}>父组件</button>
      {/* <Child /> */}
      {child}
    </>
  )
}

export default Parent;