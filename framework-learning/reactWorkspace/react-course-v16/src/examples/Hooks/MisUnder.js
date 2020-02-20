import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 由于闭包 每次使用的 count 都是第一次渲染
    // 所得到的 count，其值为 0，叫做 capture value
    const id = setInterval(() => {
      // setCount(count + 1);
      // 如果想避免 capture value
      // 可以使用 传入回调函数的形式
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;