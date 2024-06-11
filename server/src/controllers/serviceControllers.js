const { parse } = require('dotenv');
const db = require('../database.js');

// Obter os serviços
exports.get = async (req, res) => {
    const SQL = 'SELECT * FROM service';

    try {
        const [result] = await db.query(SQL);
        return res.status(200).json(result);
    } catch  {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os serviços.'});
    }
}

// Adicionar novo serviço
exports.add = async (req, res) => {
    const {title, description, status} = req.body;

    const icon = req.file.filename;

    const parsedStatus = status === 'true' ? 1 : 0;

    const SQL = 'INSERT INTO service (icon, title, description, status) VALUES (?, ?, ?, ?)';
    
    try {
        await db.query(SQL, [icon, title, description, parsedStatus]);

        return res.status(200).json({msg: 'serviço adicionado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Erro ao adicionar serviço'}); 
    }
}

// Deletar serviço
exports.delete = async (req, res) => {
    const SQL = 'DELETE FROM service WHERE id = ?';

    const id = req.params.id;

    try {
        await db.query(SQL, [id]);

        return res.status(200).json({msg: 'serviço deletado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao deletar o serviço'});
    }
}

// Atualizar serviço
exports.update = async (req, res) => {

    const id = req.params.id;

    const {title, description, status} = req.body;

    let icon = req.body.icon;

    // Verifica se existe ícone para atualizar
    if (req.file) {
        icon = req.file.filename;
    }

    const parsedStatus = status === 'true' ? 1 : 0;

    const SQL = 'UPDATE service SET icon = ?, title = ?, description = ?, status = ? WHERE ID = ?';

    try {
        await db.query(SQL, [icon, title, description, parsedStatus, id])
        return res.status(200).json({msg: 'serviço atualizado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar o serviço'});
    }
}

// Obter serviços para o carousel
exports.getCarousel = async (req, res) => {
    const SQL = 'SELECT * FROM service WHERE status = 1';

    try {
        const [result] = await db.query(SQL);
        return res.status(200).json(result);
    } catch  {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os serviços.'});
    }
}