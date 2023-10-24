const express = require('express');
const { registerStudent, getStudent } = require('./controllers/studentController');

const route = express();

route.post('/alunos', registerStudent);
route.get('/', getStudent);

module.exports = route;