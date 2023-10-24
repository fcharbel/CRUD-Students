const knex = require('../connection');

const registerStudent = async (req, res) => {
    const {
        nome,
        idade,
        nota_primeiro_semestre,
        nota_segundo_semestre,
        nome_professor,
        numero_da_sala
    } = req.body;

    try {
        const newStudent = await knex('alunos')
            .insert({
                nome,
                idade,
                nota_primeiro_semestre,
                nota_segundo_semestre,
                nome_professor,
                numero_da_sala
            })
            .returning('*');

        if (!newStudent) {
            res.status(400).json({ mensagem: 'Erro ao registrar aluno' });
        }

        res.status(201).json({ mensagem: 'Estudante registrado com sucesso:', estudante: newStudent });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}


const getStudent = (req, res) => {
    res.status(200).json('Esta  funcionando')
};


module.exports = {
    registerStudent,
    getStudent
};