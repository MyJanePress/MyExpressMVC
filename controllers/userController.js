const models = require('../models');
const Joi=require('Joi');

exports.getAll = (req, res) => {
    models.user.findAll()
        .then(readdata => {
            res.send(readdata);
            res.end();
        })
            .catch(error => {
            res.send(error);
        }); 
}

exports.userId = (req, res) => {
    models.user.findByPk(req.params.id)
        .then(readdata => {
            console.log(readdata);
            // res.render('index', {results: readdata, title: 'Express + Sequelize + MySql2: GetById'});
            res.end();
        })
        .catch(error => {
            res.status(404).send('The memeber with given id was not found');
            res.end();
        });
}

exports.createMemeber = (req, res) => {
    const {error} = validateCourse(req.body);
    if(error) return res.status(404).send(error.details[0].message);
    models.user.create(req.body)
        .then(() => {
            // res.render('index', {results: req.body, title: 'Express + MySql2 + Sequelize : Post'});
            res.end();
        })
        .catch(error => {
            res.status(404).send('The memeber with given id was not found');
            res.end();
        });    
}

exports.update = (req, res) => {
    models.user.findByPk(req.params.id)
        .then(col => {
            col.update({
                name: req.body.name,
            });
            // res.render('index', {results: col, title: 'Express + MySql2 + Sequelize:Update'});
            res.end();
        })
        .catch(err => {
            console.log(err);
            res.end();
        });
}

exports.dataDelete = (req, res) => {
    models.user.findByPk(req.params.id)
    .then(col => {
        models.user.destroy({
            where: {
                id: req.params.id,
            }
        });
        // res.render('index', {results: col, title: 'Express + MySql2 + Sequelize:Deleted'});
        res.end();
    })
    .catch(error => {
        res.status(404).send('The member with given id was not exit');
        res.end();
    });
}

function validateCourse(course){
    const schema = {
      id: Joi.number(),
      name:Joi.string().min(3).required(),
    }
    return Joi.validate(course, schema);
}