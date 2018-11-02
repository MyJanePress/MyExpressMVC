const express = require('express');
const app = express();

exports.login = (req, res) => {
    res.json([{
        id: 1,
        name: "Hiccup",
        password: 'hiccup'
      }, {
        id: 2,
        name: "King Arthur",
        password: 'king-arthur'
      }]);
    res.end();
}

exports.index = (req, res) => {
  res.json([{
    id: 1,
    name: "Hiccup",
  }, {
    id: 2,
    name: "King Arthur",
  }]);
res.end();
console.log('The game started');
}

