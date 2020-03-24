'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/tableData/:name', controller.home.info);
  router.get('/getToken/:code', controller.home.token);
  router.get('/deleteTask/:id', controller.home.deleteTask);
  router.post('/createTask', controller.home.newTask);
  router.post('/modifyTask', controller.home.modifyTask);
};
