import React, { useEffect } from 'react';

function Child({ foo }) {
  console.log('rerender');

  useEffect(() => {

  }, []);

  return (
    <div>child</div>
  )
}

function Parent() {
  return (
    <Child />
  )
}

export default Parent;