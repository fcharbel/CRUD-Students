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

const getStudents = async (req, res) => {
    try {
        const allStudents = await knex('alunos');
        res.status(200).json(allStudents);

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const detailStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await knex('alunos').where({ id });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const {
        nome,
        idade,
        nota_primeiro_semestre,
        nota_segundo_semestre,
        nome_professor,
        numero_da_sala
    } = req.body;

    try {
        const updatedStudent = await knex('alunos')
            .where({ id })
            .update({
                nome,
                idade,
                nota_primeiro_semestre,
                nota_segundo_semestre,
                nome_professor,
                numero_da_sala
            })
            .returning("*");

        if (!updatedStudent) {
            return res.status(400).json({ mensagem: "Erro ao atualizar estudante." });
        }

        return res
            .status(200)
            .json({ mensagem: "Estudante atualizado com sucesso!", estudante_atualizado: updatedStudent });

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}


module.exports = {
    registerStudent,
    getStudents,
    detailStudent,
    updateStudent
};