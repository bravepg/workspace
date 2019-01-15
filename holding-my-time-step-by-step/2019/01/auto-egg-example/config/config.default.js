'use strict';

// 配置的第三种写法 返回一个函数
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545208059916_9704';

  // add your config here
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'gzip' ];
  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  // 去掉 csrf 验证
  config.security = {
    csrf: false,
  };

  return config;
};
