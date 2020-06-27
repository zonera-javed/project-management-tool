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
  retrieve(req, res) {
     var {name, description, status, name, surname, userId, score} = req.query
     var query = {}
     if (name != null) { query.name = name };
     if (description != null) { query.description = description};
     if (status != null) { query.status = status };
     if (name != null) { query.name = name };
     if (surname != null) { query.surname = surname };
     if (userId != null) { query.userId = userId };
     if (score != null) { query.score = score };
     return Task
       .findAll({
         where: 
           query
       })
       .then(tasks => res.status(200).send(tasks))
       .catch(error => res.status(400).send(error));
  },
};
