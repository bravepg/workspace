import React, { useState,  useEffect, useLayoutEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    // dom 更改后同步执行
  });

  // Similar to ComponentDidMount and ComponentDidupdate
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;