'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.get('/', 'home.index');
  router.get('/search', 'search.index');
  app.router.post('/search', 'search.post');
  app.router.post('/user', 'search.create');
};
