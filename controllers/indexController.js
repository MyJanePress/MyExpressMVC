const models = require('../models');

exports.index = (req, res) => {
    res.json([{
        id: 1,
        name: "Hiccup",
        password: 'hiccup'
      }, {
        id: 2,
        name: "King Arthur",
        password: 'king-arthur'
      }]);
    
}