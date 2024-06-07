const db = require('../database.js');

// Obter os serviços
exports.get = async (req, res) => {
    const SQL = 'CALL GetServices()';

    try {
        const [result] = await db.query(SQL);
        return res.status(200).json(result[0]);
    } catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os serviços.'});
    }
}

// Adicionar novo serviço
exports.add = async (req, res) => {
    const {name, description, status} = req.body;
    const SQL = 'CALL AddService(?, ?, ?)';
    try {

        await db.query(SQL, [name, description, status]);
        return res.status(200).json({msg: 'Serviço adicionado com sucesso'}); 

    } catch (error){
        console.log(error);
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

    const {name, description, status} = req.body;

    const SQL = 'UPDATE service SET name = ?, description = ?, status = ? WHERE ID = ?'

    try {
        await db.query(SQL, [name, description, status, id])
        return res.status(200).json({msg: 'serviço atualizado com sucesso'}); 
    }
    catch {
        console.log('err');
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar o serviço'});
    }
}