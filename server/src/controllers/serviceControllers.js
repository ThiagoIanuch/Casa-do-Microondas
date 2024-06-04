const db = require('../database.js');


exports.get = async (req, res) => {
    const SQL = 'SELECT * FROM service';


    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao obter os produtos.'});
    }


}