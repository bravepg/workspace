import React from 'react';
import '../logo.svg'

/**
 * 图片加载错误后，重写 render 方法加载 div，然后去加载 svg
 * 其中要使用 svg-sprite-loader 进行 svg 处理，注意它的版本号和配置
 */
const failUrl = '#logo'
class AlternativeImage extends React.Component {
  render() {
    return (
      <img alt="title" onLoad={e => console.log(e)} src="www.baidu.com/1.jpg" onError={() => {
        this.render = () => {
          return React.createElement('svg', {}, (<use xlinkHref={failUrl} />))
        }
        this.forceUpdate()
      }} />
    );
  }
}

export default AlternativeImage;