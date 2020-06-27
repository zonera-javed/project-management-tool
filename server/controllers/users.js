const User = require('../models').User;
const Project = require('../models').Project;
const Task = require('../models').Task;

module.exports = {
  create(req, res) {
    return User
      .create({
         email: req.body.email,
         name: req.body.name,
         surname: req.body.surname,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
    },
    list(req, res){
      return User
        .findAll({
           include: [{
             model: Project,
             include: [{
               model: Task,
               as: 'Tasks',
             }],
             as: 'Projects',
           }],
        })
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
      return User
        .findAll({
           where: {
             name: req.params.name,
             surname: req.params.surname,
           }
        })
        .then(user => {
          if (!user) {
             return res.status(404).send({
               message: 'User Not Found',
             });
          }
          return res.status(200).send(user);
         })
         .catch(error => res.status(400).send(error));
    },
  };
