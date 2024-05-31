const router = require('express').Router();

const userControllers = require('../controllers/userControllers');

// Rota para cadastro do usuário
router.post('/register', userControllers.validateUser, userControllers.register);

router.get('/login', userControllers.login)

module.exports = router;