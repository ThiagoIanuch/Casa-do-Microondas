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
    const {name,url,status} = req.body;

    const image = req.file.filename;

    const parsedStatus = status === 'true' ? 1 : 0;
    
    const SQL = 'INSERT INTO brand (name, url, image, status) VALUES (?, ?, ?, ?)';
    try {
        await db.query(SQL, [name, url, image, parsedStatus]);

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

    const {name,url,status} = req.body;

    let image = req.body.image;

    // Verifica se existe ícone para atualizar
    if (req.file) {
        image = req.file.filename;
    }

    const parsedStatus = status === 'true' ? 1 : 0;

    const SQL = 'UPDATE brand SET name = ?, url = ?, image = ?, status = ? WHERE ID = ?'

    try {
        await db.query(SQL, [name,url, image, parsedStatus,id])
        return res.status(200).json({msg: 'marca atualizada com sucesso'}); 
    }
    catch {
        console.log('err');
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar a marca'});
    }
}

// Obter serviços para o carousel
exports.getCarousel = async (req, res) => {
    const SQL = 'SELECT * FROM brand WHERE status = 1';

    try {
        const [result] = await db.query(SQL);
        return res.status(200).json(result);
    } catch  {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os serviços.'});
    }
}