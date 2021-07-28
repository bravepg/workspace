// 前一个例子是展示了 createContext 的用法
// 但是如果由多个 Context 的话会出现回调地狱的问题
// 具体的例子可以去看 Context/ContextNewAPI.js 中的 demo

// 那么 useContext 如何使用的呢？
import React from 'react';

const themes = {
  dark: 'dark',
  white: 'white',
}
const themeContext =  React.createContext({
  theme: themes.dark,
})

function App() {
  return (
    <themeContext.Provider value={{theme: 'dark'}}>
      <Parent />
    </themeContext.Provider>
  )
}

function Parent() {
  return (
    <themeContext.Provider value={{theme: 'light'}}>
      <Child />
    </themeContext.Provider>
  )
}

function Child() {
  const { theme } = React.useContext(themeContext);
  return (
    // <themeContext.Consumer>
    //   {({ theme }) => {
    //     return <div>{theme}</div>
    //   }}
    // </themeContext.Consumer>
    // 相当于把回调函数打平了
    <div>{theme}</div>
  )
}

export default App;