const router = require('express').Router();
const db = require('../database.js');
const bcrypt = require ('bcrypt');
const { body, validationResult } = require('express-validator');

// Rota para cadastro do usuário
router.post('/register',
    [
        // Verificação dos dados

        // Email
        body('email')
            .notEmpty().withMessage('Insira seu email')
            .isEmail().withMessage('O e-mail deve ser válido')
            .isLength({max: 255}).withMessage('O e-mail deve conter no máximo 255 caracteres')
            .custom(async (email) => {
            const consultQuery = 'SELECT email FROM user WHERE email = ?';

            try {
                const [result] = await db.promise().query(consultQuery, [email]);

                if(result.length > 0) {
                    return Promise.reject('Este e-mail já está cadastrado no sistema');
                }
            }
            catch {
                return Promise.reject('Ocorreu um erro ao verificar o e-mail. Tente novamente');
            }
        }),

        // Nome
        body('firstName')
            .notEmpty().withMessage('Insira seu nome')
            .isLength({max: 50}).withMessage('O nome deve conter no máximo 50 caracteres'),

        // Sobrenome
        body('lastName')
            .notEmpty().withMessage('Insira seu sobrenome')
            .isLength({max: 100}).withMessage('O sobrenome deve conter no máximo 100 caracteres'),

        // Senha
        body('password')
            .notEmpty().withMessage('Insira sua senha')
            .isLength({min: 8, max: 30}).withMessage('A senha deve conter entre 8 e 30 caracteres'),

        // Confirmar a senha
        body('confirmPassword')
            .notEmpty().withMessage('Confirme a sua senha')
            .custom((confirmPassword, {req}) => {
                if(confirmPassword !== req.body.password) {
                    return Promise.reject('As senhas não são iguais');
                }
                else {
                    return true;
                }
            })
    ], async (req, res) => {

    // Retorna se houver erros
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    // Cadastrar no sistema
    const { email, firstName, lastName, password } = req.body;

    const insertQuery = 'INSERT INTO user (email, first_name, last_name, password) VALUES (?, ?, ?, ?)';

    const hashPassword = await bcrypt.hash(password, 8);

    db.query(insertQuery, [email, firstName, lastName, hashPassword], (error) => {
        if(error) {
            return res.status(400).json({msg: 'Erro ao realizar o cadastro. Tente novamente'});
        }
        else {
            return res.status(200).json({msg: 'Usuário cadastrado com sucesso!'})
        }
    });
});

module.exports = router;