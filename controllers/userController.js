import Joi from 'joi';
import { decode, sign } from 'jsonwebtoken';
import uuid from 'uuid-v4';
import bcrypt from 'bcrypt';
import { author } from '../models';

const saltRounds = 10;

const validateCourse = (course) => {
  const schema = {
    email: Joi.string(),
    password: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
};

export const userInfo = (req, res) => {
  const { token } = req.headers;
  const { email, password } = decode(token).data;
  author.findAll({
    where: {
      email,
      password,
    },
  })
    .then(() => {
      author.findAll()
        .then((transData) => {
          if (transData.length) {
            const sendData = {
              tblData: transData,
              access: 'root',
            };
            res.status(200).send(sendData);
          }
        });
    });
};
export const userSignup = (req, res) => {
  const {
    username, email, password,
  } = req.body;

  author.findAll({
    where: {
      email,
    },
  })
    .then((read) => {
      if (!read.length) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          author.create({
            id: uuid(),
            userName: username,
            email,
            password: hash,
          })
            .then(() => {
              const token = sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                data: email,
              }, 'secret');
              res.status(200).send(token);
            });
        });
      } else {
        res.status(200).send('signupFailed');
      }
    })
    .catch(() => {
      res.status(404).send('signupFailed');
    });
};
export const userLogin = (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(404).send(error.details[0].message);
  } else {
    const { email, password } = req.body;
    author.findOne({
      where: {
        email,
      },
    })
      .then((data) => {
        if (data) {
          bcrypt.compare(password, data.password, (err, result) => {
            if (result === true) {
              const token = sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: email,
              }, 'secret');
              res.status(200).send(token);
            } else {
              res.status(200).send('login_failed');
            }
          });
        } else {
          res.status(200).send('login_failed');
        }
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
};
export const userInfoUpdate = (req, res) => {
  const { udata, token } = req.body;
  const email = decode(token).data;
  const { username, oldpassword, newpassword } = udata;
  author.findOne(
    {
      where: {
        email,
      },
    },
  )
    .then((readData) => {
      if (readData.password === oldpassword) {
        author.update(
          {
            id: uuid(),
            userName: username,
            password: newpassword,
          },
          {
            where: {
              email,
            },
          },
        );
        res.status(200).send('successed');
      } else {
        res.status(200).send('updateFailed');
      }
    })
    .catch(() => {
      res.status(404).send('updateFailed');
    });
};

export const userRemove = (req, res) => {
  const { remail } = req.body;
  author.destroy({
    where: {
      email: remail,
    },
  })
    .then(() => {
      res.status(200).send('successed');
      res.end();
    })
    .catch(() => {
      res.status(404).send('The member with given id was not exit');
      res.end();
    });
};
