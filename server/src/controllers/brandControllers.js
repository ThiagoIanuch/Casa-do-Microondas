const db = require('../database.js');

// Obter as marcas
exports.get = async (req, res) => {
    const SQL = 'SELECT * FROM brand';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao carregar as marcas.'});
    }
}

// Adicionar nova marca
exports.add = async (req, res) => {
    const {name,image,status} = req.body;
    
    const SQL = 'INSERT INTO brand (name,image,status) VALUES (?, ?, ?)';
    try {
        await db.query(SQL, [name,image,status]);

        return res.status(200).json({msg: 'marca adicionada com sucesso'}); 
    }
    catch (error){
        console.log(error);
        return res.status(400).json({msg: 'Erro ao adicionar marca'}); 
    }
}

// Deletar marca
exports.delete = async (req, res) => {
    const SQL = 'DELETE FROM brand WHERE id = ?';

    const id = req.params.id;

    try {
        await db.query(SQL, [id]);

        return res.status(200).json({msg: 'marca deletado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao deletar a marca'});
    }
}

// Atualizar marca
exports.update = async (req, res) => {

    const id = req.params.id;

    const {name,image,status} = req.body;

    const SQL = 'UPDATE brand SET name = ?, image = ?, status = ? WHERE ID = ?'

    try {
        await db.query(SQL, [name,image,status,id])
        return res.status(200).json({msg: 'marca atualizada com sucesso'}); 
    }
    catch {
        console.log('err');
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar a marca'});
    }
}