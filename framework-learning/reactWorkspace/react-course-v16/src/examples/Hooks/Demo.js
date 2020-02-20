import React, { useState, useEffect, useCallback } from 'react';
import { Input } from 'antd';

function App() {
  useEffect(()=>{
    console.log('App useEffect!')
  });
  useEffect(()=>{
    console.log('App2 useEffect!')
  }, []);
  const RenderInput = useCallback(({type}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    console.log(type + 'RenderInput');
		useEffect(()=>{
			console.log(type + 'useEffect')
			return ()=>{
				console.log(type + '卸载')
			}
		})
    return <Input value={value} onChange={handleChange} />;
  }, []);

  return (
    <div>
      问题
      <p>1.控制台打印顺序</p>
      <p>2.组件调用输入后失焦问题</p>
      <p>3.函数调用和组件调用区别</p>
        组件调用
      	<RenderInput type="组件" />
        函数调用
      	{RenderInput({ type: '函数' })}
    </div>
  );
}

// const RenderInput = ({ type }) => {
//   console.log(type +'render');
//   const [value, setValue] = useState('');
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   useEffect(() => {
//     console.log(type +'useEffect render');
//   }, []);
//   return <Input value={value} onChange={handleChange} />;
// };

// function App() {
//   return (
//     <div>
//       <p style={{ color: 'red' }}>函数调用的组件 状态更新之后会导致 组件调用的组件也会重新渲染</p>
//       <p>在两个 input 都输入值看控制台打印的结果</p>
//       <div>
//         组件调用
//       	<RenderInput type="组件" />
//       </div>
//       <div>
//         函数调用
//         {/* <!-- 函数调用相当于把代码都放在了 APP 中 --> */}
//       	{RenderInput({ type: '函数' })}
//       </div>
//     </div>
//   );
// }

export default App;