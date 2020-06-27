const tasksController = require('../controllers').tasks;
const projectsController = require('../controllers').projects;
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
     message: 'Welcome to the Projects API!',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);

  app.post('/api/users/:userId/projects', projectsController.create);
  app.get('/api/projects', projectsController.list);

  app.post('/api/users/:userId/projects/:projectId/tasks', tasksController.create);
  app.get('/api/tasks', tasksController.list);
  };
