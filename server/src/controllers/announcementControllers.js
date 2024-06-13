const db = require('../database.js');

// Obter os anuncios
exports.get = async (req, res) => {
    const SQL = 'SELECT * FROM announcement';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao carregar os anuncios.'});
    }
}

// Adicionar novo anuncio
exports.add = async (req, res) => {
    const {description,status} = req.body;

    const image = req.file.filename;

    const parsedStatus = status === 'true' ? 1 : 0;
    
    const SQL = 'INSERT INTO announcement (image,description,status) VALUES (?, ?, ?)';
    try {
        await db.query(SQL, [image,description,parsedStatus]);

        return res.status(200).json({msg: 'anuncio adicionado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Erro ao adicionar anuncio'}); 
    }
}

// Deletar anuncio
exports.delete = async (req, res) => {
    const SQL = 'DELETE FROM announcement WHERE id = ?';

    const id = req.params.id;

    try {
        await db.query(SQL, [id]);

        return res.status(200).json({msg: 'anuncio deletado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao deletar o anuncio'});
    }
}

// Atualizar anuncio
exports.update = async (req, res) => {

    const id = req.params.id;

    const {description,status} = req.body;

    let image = req.body.image;

    // Verifica se existe imagem para atualizar
    if (req.file) {
        image = req.file.filename;
    }

    const parsedStatus = status === 'true' ? 1 : 0;

    const SQL = 'UPDATE announcement SET image = ?, description = ?, status = ? WHERE ID = ?'

    try {
        await db.query(SQL, [image,description,parsedStatus,id])
        return res.status(200).json({msg: 'anuncio atualizado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar o anuncio'});
    }
}

exports.getCarousel = async (req, res) => {
    const SQL = 'SELECT * FROM announcement WHERE status=1';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao carregar os anuncios.'});
    }
}
