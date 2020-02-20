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
    <themeContext.Provider value={{theme: themes.dark}}>
      <Parent />
    </themeContext.Provider>
  )
}

function Parent() {
  return <Child />
}

function Child() {
  return (
    <themeContext.Consumer>
      {({ theme }) => {
        return <div>{theme}</div>
      }}
    </themeContext.Consumer>
  )
}

export default App;