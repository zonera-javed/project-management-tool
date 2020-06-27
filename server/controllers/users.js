const User = require('../models').User;

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
        .findAll()
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error));
    },
  };
