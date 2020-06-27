const Project = require('../models').Project;
const Task = require('../models').Task;

module.exports = {
  create(req, res) {
    return Project
      .create({
         name: req.body.name,
         body: req.body.body,
         status: req.body.status,
         userId: req.params.userId,
         })
         .then(project => res.status(201).send(project))
         .catch(error => res.status(400).send(error));
  },
  list(req, res) {
  return Project
    .findAll({
       include: [{
         model: Task,
         as: 'Tasks',
       }],
     })
    .then(projects => res.status(200).send(projects))
    .catch(error => res.status(400).send(error));
  },
};
