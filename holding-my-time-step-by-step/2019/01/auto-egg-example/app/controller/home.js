'use strict';

// const Controller = require('egg').Controller;

// class HomeController extends Controller {
//   async index() {
//     this.ctx.body = 'hi, egg';
//   }
// }

// module.exports = HomeController;

exports.index = async (app, ctx) => {
  console.log(ctx, 'ctx');
  app.body = JSON.stringify(app);
};


// module.exports = app => {

//   return class HomeController extends app.Controller {

//     async index() {
//       this.ctx.body = JSON.stringify(app);
//     }

//   };

// };
