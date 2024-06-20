const db = require('../database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const { body, validationResult } = require('express-validator');
const blacklist = new Set(); // utiliza new set q é um objeto, pq com array não adicionava corretamente os tokens pra invalidar qnd o usuário desloga

// Validações de email, nome, sobrenome e senha
exports.validateUser = [
    body('email')
        .notEmpty().withMessage('Insira seu email')
        .isEmail().withMessage('O e-mail deve ser válido')
        .isLength({ max: 255 }).withMessage('O e-mail deve conter no máximo 255 caracteres')
        .custom(async (email) => {
            const SQL = 'CALL VerifyEmail(?)';

            try {
                const [result] = await db.query(SQL, [email]);

                if (result[0].length > 0) {
                    return Promise.reject('Este e-mail já está cadastrado no sistema');
                }
            } catch (error) {
                return Promise.reject('Ocorreu um erro ao verificar o e-mail. Tente novamente');
            }
        }),

    body('firstName')
        .notEmpty().withMessage('Insira seu nome')
        .isLength({ max: 50 }).withMessage('O nome deve conter no máximo 50 caracteres'),

    body('lastName')
        .notEmpty().withMessage('Insira seu sobrenome')
        .isLength({ max: 100 }).withMessage('O sobrenome deve conter no máximo 100 caracteres'),

    body('password')
        .notEmpty().withMessage('Insira sua senha')
        .isLength({ min: 8, max: 30 }).withMessage('A senha deve conter entre 8 e 30 caracteres'),

    body('confirmPassword')
        .notEmpty().withMessage('Confirme a sua senha')
        .custom((confirmPassword, { req }) => {
            if (confirmPassword !== req.body.password) {
                return Promise.reject('As senhas não são iguais');
            } else {
                return true;
            }
        })
];

exports.register = async (req, res) => {
    // Retorna se houver erros
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Cadastra o usuário
    const SQL = 'CALL RegisterUser(?, ?, ?, ?)';

    const { email, firstName, lastName, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 8);

    try {
        await db.query(SQL, [email, firstName, lastName, hashPassword]);
        
        return res.status(200).json({ msg: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        return res.status(400).json({ msg: 'Erro ao realizar o cadastro. Tente novamente' });
    }
};

// Realizar o login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const SQL = 'CALL LoginUser(?)'

    try {
        // Validar o email
        const [result] = await db.query(SQL, [email])

        if(result[0].length === 0) {
            return res.status(400).json({ msg: 'E-mail ou senha incorretos' });
        }

        // Validar a senha
        const validPassword = await bcrypt.compare(password, result[0][0].password);

        if (!validPassword) {
            return res.status(400).json({ msg: 'E-mail ou senha incorretos' });
        }
       
        // Gerar token
        const userID = result[0][0].id;

        const token = jwt.sign({ id: userID }, jwtSecret, { expiresIn: '1h' });

        // Confirmar
        res.cookie('token', token)

        return res.status(200).json({ msg: 'Login realizado com sucesso!' });
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ msg: 'Ocorreu um erro ao tentar realizar o login. Tente novamente!' });
    }
}

// Validar o token
exports.validateToken = function(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(400).json({ msg: 'Nenhum token encontrado' });
    }

    if(blacklist.has(token)) {
        return res.status(400).json({ msg: 'O token foi revogado' });
    }

    jwt.verify(token, jwtSecret, (error, decoded) => {
        if(error) {
            return res.status(400).json({ msg: 'O token não é válido' });
        }

        req.id = decoded.id;

        // Criar refresh para o token
        // Pega o horario atual em segundos e diminui pelo tempo de expiração do token e verifica qnt tempo falta, o Math.Floor é somente para interar o tempo
        const currentTime = Math.floor(Date.now() / 1000); 
        const expirationTime = decoded.exp;
        const refreshThreshold = 900;

        if (expirationTime - currentTime < refreshThreshold) {

            const newToken = jwt.sign({ id: decoded.id }, jwtSecret, { expiresIn: '1h' });
            
            res.cookie('token', newToken,);
        }

        // Chamar a prox função pra pegar os dados do usuário        
        next();
    })
}

// Pegar os dados do usuario
exports.get = async (req, res) => {
    const id = req.id;

    const SQL = 'CALL GetUser(?)'

    try {
        const [result] = await db.query(SQL, id);

        return res.status(200).json(result[0][0]);
    }
    catch{
        return res.status(400).json({ msg: 'Ocorreu um erro ao obter os dados do usuário' });
    }
}

// Deslogar
exports.logout = function(req, res) {
    // add o token no array de blacklist
    const token = req.cookies.token;

    blacklist.add(token);

    return res.status(200).json({ msg: 'Deslogado com sucesso' });
};