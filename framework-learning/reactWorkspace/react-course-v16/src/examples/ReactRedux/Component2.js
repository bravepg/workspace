import React from 'react';
import { connect } from 'react-redux/src';

const Component2 = (props) => {
  console.log('Component2 render');
  // 任何一个 dispatch 动作都会引发 connect 的组件重新执行，为什么呢？
  // connect 返回的组件订阅了 store 作为 props，一旦 store 改变，会重新执行 render
  // 在 render 中判断是否需要重新更新 Component2
  return <div>{props.data.obj2.info.name}, {props.data.obj2.info.age || ''}<button onClick={() => props.dispatch({ type: 'CHANGE_INFO2' })}>change2</button></div>;
};

function mapStateToProps(state) {
  return {
    data: state.reducer2,
  }
}

export default connect(mapStateToProps)(Component2);