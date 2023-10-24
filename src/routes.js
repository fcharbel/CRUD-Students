const express = require('express');
const {
    registerStudent,
    getStudents,
    detailStudent,
    updateStudent
} = require('./controllers/studentController');

const route = express();

route.post('/alunos', registerStudent);
route.get('/alunos', getStudents);
route.get('/alunos/:id', detailStudent);
route.put('/alunos/:id', updateStudent)

module.exports = route;