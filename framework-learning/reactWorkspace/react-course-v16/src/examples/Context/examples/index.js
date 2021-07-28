import React from 'react';
import { Layout } from 'antd';
import { Language } from './Language';
import { Theme } from './Theme';
import { LogIn } from './LogIn';
import { LogOut } from './LogOut';

import './index.less';

const { Content } = Layout;

class App extends React.Component {
  // 会阻止来自旧版 context 的更新
  // 不会阻止新版
  // 网上很多地方都没有描述清楚旧版 context 和 新版 context 的区别
  // 我认为这个地方是他们的核心区别
  // 而使用 useContext 来替代 Consumer 则实现了数据和视图的分离
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Layout>
        <Content>
          <LogIn {...this.props} />
          <LogOut {...this.props} />
        </Content>
      </Layout>
    )
  }
}

export default function() {
  return (

    <Theme>
      <Language>
        <App />
      </Language>
    </Theme>
  )
}
