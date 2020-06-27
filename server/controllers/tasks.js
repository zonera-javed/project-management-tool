const Task = require('../models').Task;

module.exports = {
  create(req, res) {
     return Task
        .create({
           name: req.body.name,
           description: req.body.description,
           score: req.body.score,
           status: req.body.status,
           projectId: req.params.projectId,
           userId: req.params.userId,
          }) 
         .then(task => res.status(201).send(task))
         .catch(error => res.status(400).send(error));
  },
  list(req, res) {
     return Task
        .findAll()
        .then(tasks => res.status(200).send(tasks))
        .catch(error => res.status(400).send(error));
  },
};
