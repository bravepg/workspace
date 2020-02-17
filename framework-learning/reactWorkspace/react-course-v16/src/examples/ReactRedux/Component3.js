import React from 'react';


export default class Component3 extends React.Component {
  render () {
    console.log('Component3 render');
    return (
      <button>Component3</button>
    );
  }
}

// 会随着父组件的 render 而 render
// const Component3 = () => {
//   console.log('Component3 render')
//   return <button>Component3</button>;
// }
// export default Component3;