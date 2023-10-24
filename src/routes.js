const express = require('express');
const getStudent = require('./controllers/studentController');

const route = express();

route.get('/', getStudent);

module.exports = route;