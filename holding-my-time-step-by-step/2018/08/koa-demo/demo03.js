const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

var router = new Router();

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

// 带有名称的路由
router.get('user', '/users/:id', (ctx, next) => {
  ctx.response.body = 'Hello World';
});

// router.url(name, params, [options]) ⇒ String | Error
console.log(router.url('user', 3));

console.log(router.route('user'))  // 返回一个 layer 查看，跟 express 中的功能很不一样

// 利用 Router 直接生成路由
// Router.url(path, params [, options]) ⇒ String
console.log(Router.url('/users/:id', {id: 1}));

app.use(main);
app.use(router.routes);  // 使用路由
app.listen(3000);