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
    .then(() => {
      models.author.findAll()
        .then(transData => {
          if (transData.length) {
            const sendData = {
              tblData: transData,
              access: 'root',
            };
            res.status(200).send(sendData);
          }
        })
    })
}
exports.userSignup = (req, res) => {
  const { userID, username, email, password } = req.body;
  models.author.create({
    id: userID,
    userName: username,
    email: email,
    password: password,
  })
    .then(() => {
      const userInfo = { email, password };
      const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: userInfo,
      }, 'secret');
      res.status(200).send(token);
    })
    .catch(error => {
      res.status(404).send(error);
  })
}
exports.userLogin = (req, res) => {
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
        const userInfo = {email, password};
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
      res.status(404).send(error);
  })
};

exports.userInfoUpdate = (req, res) => {
  const { udata, token } = req.body;
  const { email, password } = jwt.decode(token).data;
  const { userID, newpassword } = udata;

  models.author.update(
    {id: userID, password: newpassword},
    {
      where: {email: email},
    }
  )
    .then(() => {
      const userInfo = { email, password };
      const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: userInfo,
      }, 'secret');
      res.status(200).send(token);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send('You were not properType');
  })
};

exports.userRemove = (req, res) => {
  const { remail } = req.body;
  models.author.destroy({
    where: {
      email: remail,
    }
  })
    .then(() => {
      res.status(200).send('successed');
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
function validateCreation(course) {
  const schema = {
    id: Joi.string().min(3).required,
  }
}
