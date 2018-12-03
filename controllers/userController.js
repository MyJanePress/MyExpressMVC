import Joi from 'joi';
import uuid from 'uuid-v4';
import bcrypt from 'bcrypt';
import { author } from '../models';
import { tokenSign } from '../middleware/token';

const saltRounds = 10;

const validateCourse = (course) => {
  const schema = {
    email: Joi.string(),
    password: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
};

export const userInfo = (req, res) => {
  const email = req.app.get('email');
  if (email) {
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
  } else {
    res.status(200).send('failed');
  }
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
              const token = tokenSign(email);
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
              const token = tokenSign(email);
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
  const { udata } = req.body;
  const email = req.app.get('email');
  const { username, password, newpassword } = udata;

  author.findOne(
    {
      where: {
        email,
      },
    },
  )
    .then((readData) => {
      bcrypt.compare(password, readData.password, (err, result) => {
        if (result === true) {
          bcrypt.hash(newpassword, saltRounds, (_err, hash) => {
            author.update(
              {
                userName: username,
                password: hash,
              },
              {
                where: {
                  email,
                },
              },
            );
          });
          res.status(200).send('successed');
        } else {
          res.status(200).send('updateFailed');
        }
      });
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
