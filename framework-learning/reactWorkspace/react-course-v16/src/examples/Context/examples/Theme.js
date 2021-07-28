import React from 'react';
import { Button } from 'antd';

export const ThemeContext = React.createContext({
  theme: 'dark',
});

ThemeContext.displayName = 'ThemeContext';

export class Theme extends React.Component {
  state = {
    theme: 'light'
  }

  render() {
    const { children, ...rest } = this.props;
    if (React.isValidElement(children)) {
      return(
        <ThemeContext.Provider value={this.state}>
          {React.cloneElement(children, { ...rest })}
          <Button style={{ margin: '0 20px', position: 'absolute', top: 32, right: 32 }} onClick={() => {
            this.setState({
              theme: this.state.theme === 'light' ? 'dark' : 'light'
            })
          }}>切换主题</Button>
        </ThemeContext.Provider>
      )
    }
    return children;
  }
}
