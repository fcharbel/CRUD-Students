const joi = require('joi')

const studentSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório'
    }),
    idade: joi.number().integer().min(1).required().messages({
        'any.required': 'O campo idade é obrigatório',
        'any.empty': 'O campo idade é obrigatório',
        'number.min': 'A idade deve ser maior ou igual a 1',
        'number.base': 'O campo idade deve ser um número'
    }),
    nota_primeiro_semestre: joi.number().min(0).max(10).messages({
        'number.base': 'O campo nota_primeiro_semestre deve ser um número',
        'number.min': 'O campo nota_primeiro_semestre deve ser maior ou igual a 0',
        'number.max': 'O campo nota_primeiro_semestre deve ser menor ou igual a 10',
    }),
    nota_segundo_semestre: joi.number().min(0).max(10).messages({
        'number.base': 'O campo nota_segundo_semestre deve ser um número',
        'number.min': 'O campo nota_segundo_semestre deve ser maior ou igual a 0',
        'number.max': 'O campo nota_segundo_semestre deve ser menor ou igual a 10',
    }),
    nome_professor: joi.string().required().messages({
        'any.required': 'O campo nome_professor é obrigatório',
        'string.empty': 'O campo nome_professor é obrigatório'
    }),
    numero_da_sala: joi.number().integer().min(1).required().messages({
        'any.required': 'O campo numero_da_sala é obrigatório',
        'any.empty': 'O campo numero_da_sala é obrigatório',
        'number.min': 'O numero_da_sala deve ser maior ou igual a 1',
        'number.base': 'O campo numero_da_sala deve ser um número'
    })
});

const updateStudentSchema = joi.object({
    nome: joi.string().messages({
        'string.empty': 'O campo nome não pode estar vazio'
    }),
    idade: joi.number().integer().min(1).messages({
        'any.empty': 'O campo idade não pode estar vazio',
        'number.min': 'A idade deve ser maior ou igual a 1',
        'number.base': 'O campo idade deve ser um número'
    }),
    nota_primeiro_semestre: joi.number().min(0).max(10).messages({
        'number.base': 'O campo nota_primeiro_semestre deve ser um número',
        'number.min': 'O campo nota_primeiro_semestre deve ser maior ou igual a 0',
        'number.max': 'O campo nota_primeiro_semestre deve ser menor ou igual a 10',
    }),
    nota_segundo_semestre: joi.number().min(0).max(10).messages({
        'number.base': 'O campo nota_segundo_semestre deve ser um número',
        'number.min': 'O campo nota_segundo_semestre deve ser maior ou igual a 0',
        'number.max': 'O campo nota_segundo_semestre deve ser menor ou igual a 10',
    }),
    nome_professor: joi.string().messages({
        'string.empty': 'O campo nome_professor não pode estar vazio'
    }),
    numero_da_sala: joi.number().integer().min(1).messages({
        'any.empty': 'O campo numero_da_sala não pode estar vazio',
        'number.min': 'O numero_da_sala deve ser maior ou igual a 1',
        'number.base': 'O campo numero_da_sala deve ser um número'
    })
});


module.exports = { studentSchema, updateStudentSchema };