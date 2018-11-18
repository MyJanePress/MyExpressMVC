// const author = models.author;
const Joi = require('Joi');
const jwt = require('jsonwebtoken');
const models = require('../models');

exports.getAll = (req, res) => {
  console.log(req.headers.Authurization);

  models.author.findAll()
    .then((readdata) => {
      res.send(readdata);
      res.end();
    })
    .catch((error) => {
      res.status(404).send(error);
    });
};

exports.userId = (req, res) => {
  models.user.findByPk(req.params.authuParams.email)
    .then((readdata) => {
      // res.render('index', {results: readdata, title: 'Express + Sequelize + MySql2: GetById'});
      res.end();
    })
    .catch(() => {
      res.status(404).send('The memeber with given id was not found');
      res.end();
    });
};

exports.userInfo = (req, res) => {
  const token = req.headers.token;
  const { email, password } = jwt.decode(token).data;
  models.author.findAll({
    where: {
      email: email,
      password: password,
    }
  })
    .then(data => {
      if (data.length) { 
        res.status(200).send('root');
      }
      else {
        res.status(200).send('access_denied');
      }
    })
}
exports.createMemeber = (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  const { email, password } = req.body;
  models.author.findAll({
    where: {
      email:email
    }
  })
    .then((data) => {
      if (data.length) {
        const userInfo = req.body;
        const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: userInfo,
        }, 'secret');
        res.status(200).send(token);
      }
      else {
        res.status(200).send(token);
      }
    })
    .catch((error) => {
      res.status(403).send(error);
  })
};

exports.update = (req, res) => {
  models.user.findByPk(req.params.id)
    .then((col) => {
      col.update({
        name: req.body.name,
      });
      // res.render('index', {results: col, title: 'Express + MySql2 + Sequelize:Update'});
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
};

exports.dataDelete = (req, res) => {
  models.user.findByPk(req.params.id)
    .then((col) => {
      models.user.destroy({
        where: {
          id: req.params.id,
        },
      });
      // res.render('index', {results: col, title: 'Express + MySql2 + Sequelize:Deleted'});
      res.end();
    })
    .catch((error) => {
      res.status(404).send('The member with given id was not exit');
      res.end();
    });
};

function validateCourse(course) {
  const schema = {
    email: Joi.string(),
    password: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}
