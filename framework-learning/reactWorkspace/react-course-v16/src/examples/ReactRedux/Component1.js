import React from 'react';
import { connect } from 'react-redux/src';

const Component1 = (props) => {
  console.log('Component1 render');
  return <div>{props.data.obj1.info.name}, {props.data.obj1.info.age || ''}<button onClick={() => props.dispatch({ type: 'CHANGE_INFO1' })}>change1</button></div>;
};

function mapStateToProps(state) {
  return {
    data: state.reducer1,
  }
}

// 不会随着父组件的状态改变而重新渲染是因为在 connect 中做了 shouldComponentUpdate 的判断
export default connect(mapStateToProps)(Component1);