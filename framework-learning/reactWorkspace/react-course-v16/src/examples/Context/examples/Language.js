import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export class Language extends React.Component {
  state = {
    language: 'en'
  }

  // 通过这种方式摆脱最原始的一层层传递 props 的繁琐
  static childContextTypes = {
    language: PropTypes.string,
  }
  // 注意 getChildContext 是实例方法，以便获取实例属性
  getChildContext() {
    return {
      language: this.state.language,
    }
  }

  // 如果互相嵌套，可以获取上一层的 context 中的值
  static contextTypes = {
    language: PropTypes.string,
  }

  render() {
    const { children, ...rest } = this.props;
    if (React.isValidElement(children)) {
      return(
        <>
          {React.cloneElement(children, { ...rest })}
          <Button style={{ margin: '0 20px', position: 'absolute', top: 32 }} onClick={() => {
            this.setState({
              language: this.state.language === 'en' ? 'ch' : 'en'
            })
          }}>切换语言</Button>
        </>
      )
    }
    return this.props.children;
  }
}
