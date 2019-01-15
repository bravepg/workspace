'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  app.router.get('/search', app.controller.search.index);
  app.router.post('/search', app.controller.search.post);
  app.router.post('/user', app.controller.search.create);
};
