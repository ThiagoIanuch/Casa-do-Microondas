const db = require('../database.js');

// Obter os produtos
exports.get = async (req, res) => {
    const SQL = 'SELECT * FROM product';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os produtos.'});
    }
}

// Adicionar novo produto
exports.add = async (req, res) => {
    const {type, description, price } = req.body;

    const image = req.file.filename;

    const SQL = 'INSERT INTO product (type, description, image, price) VALUES (?, ?, ?,?)';
    try {
        await db.query(SQL, [type, description, image, price]);

        return res.status(200).json({msg: 'Produto adicionado com sucesso'}); 
    }
    catch (error){
        console.log(error);
        return res.status(400).json({msg: 'Erro ao adicionar produto'}); 
    }
}

// Deletar produto
exports.delete = async (req, res) => {
    const SQL = 'DELETE FROM product WHERE id = ?';

    const id = req.params.id;

    try {
        await db.query(SQL, [id]);

        return res.status(200).json({msg: 'Produto deletado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao deletar o produto'});
    }
}

// Atualizar produto
exports.update = async (req, res) => {

    const id = req.params.id;

    const {type, description, price} = req.body;

    // Verifica se existe imagem para atualizar
    let image = req.body.image;

    if (req.file) {
        image = req.file.filename;
    }

    const SQL = 'UPDATE product SET type = ?, description = ?, image = ?, price = ? WHERE ID = ?'

    try {
        await db.query(SQL, [type, description, image, price, id])
        return res.status(200).json({msg: 'Produto atualizado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao atualizar o produto'});
    }
}

// Obter os produtos do outlet
exports.getOutlet = async (req, res) => {
    const SQL = 'SELECT * FROM product ORDER BY RAND() LIMIT 5';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os produtos.'});
    }
}