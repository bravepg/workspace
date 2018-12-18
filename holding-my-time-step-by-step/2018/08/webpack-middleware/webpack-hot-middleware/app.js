import { init } from './src/js/index';
// 重要，知会 webpack 允许此模块的热更新
if (module.hot) {
    module.hot.accept();
}
init();