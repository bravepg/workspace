import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { ThemeContext } from './Theme';


export class LogIn extends React.Component {
  static contextTypes = {
    language: PropTypes.string,
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => <Button type={value.theme === 'light' ? 'dashed' : 'primary'} style={{ marginRight: 20 }}>{this.context.language === 'en' ? 'LogIn' : '登录'}</Button>}
      </ThemeContext.Consumer>
    )
  }
}