/**
 * 测试组件卸载仍然执行的 bug
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    return <input value = {this.state.number} />
  }
}


export default A;