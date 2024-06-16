const db = require('../database.js');

// Validar o form
const { body, validationResult } = require('express-validator');

exports.validateContact = [
    // Validações de email, nome, assunto e mensagem
    body('name')
        .notEmpty().withMessage('Insira seu nome')
        .isLength({ max: 255 }).withMessage('O nome deve conter no máximo 255 caracteres'),
    body('email')
        .notEmpty().withMessage('Insira seu email')
        .isEmail().withMessage('O e-mail deve ser válido')
        .isLength({ max: 255 }).withMessage('O e-mail deve conter no máximo 255 caracteres'),
    body('subject')
        .notEmpty().withMessage('Insira o assunto')
        .isLength({ max: 255 }).withMessage('O assunto deve conter no máximo 255 caracteres'),
    body('message')
        .notEmpty().withMessage('Insira a mensagem')
        .isLength({ max: 5000 }).withMessage('A mensagem deve ter no máximo 5000 caracteres'),
];

// Obter os contatos
exports.get = async (req, res) => {
    const SQL = 'CALL GetContacts()';

    try {
        const [result] = await db.query(SQL);

        return res.status(200).json(result[0]);
    }
    catch {
        return res.status(400).json({msg: 'Ocorreu um erro ao carregar os contatos.'});
    }
}

// Enviar dados do contato
exports.send = async (req, res) => {
    // Retorna se houver erros
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name,email,subject,message} = req.body;
    
    const SQL = 'CALL SendContact(?, ?, ?, ?)';
    try {
        await db.query(SQL, [name,email,subject,message]);

        return res.status(200).json({msg: 'contato adicionado com sucesso'}); 
    }
    catch {
        return res.status(400).json({msg: 'Erro ao adicionar contato'}); 
    }
}