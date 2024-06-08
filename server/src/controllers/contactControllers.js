const db = require('../database.js');

// Obter os contatos
exports.get = async (req, res) => {
    const SQL = 'SELECT * FROM contact';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao carregar os contatos.'});
    }
}

// Adicionar novo contato
exports.add = async (req, res) => {
    const {name,email,phone,subject,message} = req.body;
    
    const SQL = 'INSERT INTO contact (name,email,phone,subject,message) VALUES (?, ?, ?, ?, ?)';
    try {
        await db.query(SQL, [name,email,phone,subject,message]);

        return res.status(200).json({msg: 'contato adicionado com sucesso'}); 
    }
    catch (error){
        console.log(error);
        return res.status(400).json({msg: 'Erro ao adicionar contato'}); 
    }
}

// Deletar contato
exports.delete = async (req, res) => {
    const SQL = 'DELETE FROM contact WHERE id = ?';

    const id = req.params.id;

    try {
        await db.query(SQL, [id]);

        return res.status(200).json({msg: 'contato deletado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao deletar o contato'});
    }
}

// Atualizar contato
exports.update = async (req, res) => {

    const id = req.params.id;

    const {name,email,phone,subject,message} = req.body;

    const SQL = 'UPDATE contact SET name = ?, email = ?, phone = ?, subject = ?, message = ?, WHERE ID = ?'

    try {
        await db.query(SQL, [name,email,phone,subject,message,id])
        return res.status(200).json({msg: 'contato atualizado com sucesso'}); 
    }
    catch {
        console.log('err');
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar o contato'});
    }
}