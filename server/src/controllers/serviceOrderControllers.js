const db = require('../database.js');

// Validar o form
const { body, validationResult } = require('express-validator');

exports.validateOrder = [
    // Validações de telephone, tipo, marca, modelo e descrição
    body('phone')
    .notEmpty().withMessage('Insira seu telefone')
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/).withMessage('Insira um número de telefone válido'),
    body('type')
        .notEmpty().withMessage('Insira o tipo de produto')
        .isLength({ max: 50 }).withMessage('O tipo deve conter no máximo 50 caracteres'),
    body('brand')
        .notEmpty().withMessage('Selecion uma marca'),
    body('model')
        .notEmpty().withMessage('Insira o modelo')
        .isLength({ max: 50 }).withMessage('O modelo deve conter no máximo 50 caracteres'),
    body('description')
        .notEmpty().withMessage('Insira a descrição do defeito')
        .isLength({ max: 5000 }).withMessage('A descrição deve ter no máximo 5000 caracteres'),
];

// Obter as ordens
exports.get = async (req, res) => {
    const SQL = 'CALL GetServiceOrders()';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result[0]);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao carregar os contatos.'});
    }
}

// Enviar dados da ordem de serviço
exports.send = async (req, res) => {
    // Retorna se houver erros
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const userID = req.params.id;

    const {phone, type, brand, model, description} = req.body;
    
    const SQL = 'CALL SendServiceOrder(?, ?, ?, ?, ?, ?)';
    try {
        await db.query(SQL, [userID, phone, type, brand, model, description]);

        return res.status(200).json({msg: 'Ordem de serviço enviada com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Erro ao enviar ordem de serviço'}); 
    }
}