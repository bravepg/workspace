// 异步中间件
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  let res = await fs.readFileSync('./index.html');
  ctx.response.body = res.toString();
  next();
};

app.use(main);
app.listen(3000);