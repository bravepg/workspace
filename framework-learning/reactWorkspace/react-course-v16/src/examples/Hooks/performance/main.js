import React, { useState, useEffect, useMemo, useCallback } from 'react';

function Child(props) {
  console.log('rerender');

  useEffect(() => {

  }, []);

  return (
    <button onClick={() => { props.onClick() }}>child</button>
  )
}

function Parent() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(0);

  const onClick = useCallback(() => { setState(state + 1) }, [state])

  // useMemo 类似 componentDidUpdate
  const child = useMemo(() => <Child onClick={onClick} />, [onClick]);

  return (
    <React.Fragment>
      <button onClick={() => { setCount(count + 1); }}>parent count { count }</button>
      {child}
    </React.Fragment>
  )
}

export default Parent;