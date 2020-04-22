import React, { useState, useEffect } from 'react';

function useCount() {
  const [count, setCount] = useState(0);

  return [count, setCount];
}

function App() {
  const [count, setCount] = useCount(0);

  // https://github.com/facebook/react/issues/15705
  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 2000);
  }, [setCount]);
  // 关于这里为什么要使用 setCount 作为依赖列表，
  // 上面的 issue 有一定的讨论，是因为自定义 hook 未来可能会发生变化，无法返回稳定的标识（preserve indentify）

  return (
    <React.Fragment>
      <button> count { count }</button>
    </React.Fragment>
  )
}

export default App;