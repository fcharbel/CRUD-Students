const express = require('express');
const {
    registerStudent,
    getStudents,
    detailStudent,
    updateStudent,
    deleteStudent
} = require('./controllers/studentController');

const validateRequest = require('./middlewares/validateRequest');
const { updateStudentSchema, studentSchema } = require('./validations/studentSchema');

const route = express();

route.post('/alunos', validateRequest(studentSchema), registerStudent);
route.get('/alunos', getStudents);
route.get('/alunos/:id', detailStudent);
route.put('/alunos/:id', validateRequest(updateStudentSchema), updateStudent);
route.delete('/alunos/:id', deleteStudent);

module.exports = route;