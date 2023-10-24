const express = require('express');
const {
    registerStudent,
    getStudents,
    detailStudent,
    updateStudent,
    deleteStudent
} = require('./controllers/studentController');

const route = express();

route.post('/alunos', registerStudent);
route.get('/alunos', getStudents);
route.get('/alunos/:id', detailStudent);
route.put('/alunos/:id', updateStudent);
route.delete('/alunos/:id', deleteStudent);

module.exports = route;