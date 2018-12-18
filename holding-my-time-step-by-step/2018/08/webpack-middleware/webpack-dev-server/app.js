import { init } from './src/js/index';
// 如果不加上改行，浏览器会刷新页面进行更新 live reload
// 而不是热更新
if (module.hot) {
    module.hot.accept();
}
init();