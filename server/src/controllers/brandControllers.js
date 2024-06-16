const db = require('../database.js');

// Obter as marcas
exports.get = async (req, res) => {
    const SQL = 'CALL GetBrands()';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result[0]);
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
    
    const SQL = 'CALL AddBrand(?, ?, ?, ?)';
    try {
        await db.query(SQL, [name, url, image, parsedStatus]);

        return res.status(200).json({msg: 'marca adicionada com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Erro ao adicionar marca'}); 
    }
}

// Deletar marca
exports.delete = async (req, res) => {
    const SQL = 'CALL DeleteBrand(?)';

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

    // Verifica se existe imagem para atualizar
    if (req.file) {
        image = req.file.filename;
    }

    const parsedStatus = status === 'true' ? 1 : 0;

    const SQL = 'CALL UpdateBrand(?, ?, ?, ?, ?)'

    try {
        await db.query(SQL, [id, name,url, image, parsedStatus])
        return res.status(200).json({msg: 'marca atualizada com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar a marca'});
    }
}

// Obter serviços para o carousel
exports.getCarousel = async (req, res) => {
    const SQL = 'CALL GetActiveBrands()';

    try {
        const [result] = await db.query(SQL);
        return res.status(200).json(result[0]);
    } catch  {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os serviços.'});
    }
}