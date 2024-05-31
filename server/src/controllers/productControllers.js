const db = require('../database.js');

// Obter os produtos
exports.getProducts = async (req, res) => {
    const SQL = 'SELECT * FROM product';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os produtos.'});
    }
}

// Deletar os produtos
exports.deleteProduct = async (req, res) => {
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