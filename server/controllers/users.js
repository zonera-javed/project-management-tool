const User = require('../models').User;
const Project = require('../models').Project;

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
             as: 'Projects',
           }],
        })
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error));
    },
  };
