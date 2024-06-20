const router = require('express').Router();

const userControllers = require('../controllers/userControllers');

// Rota para cadastro do usuário
router.post('/register', userControllers.validateUser, userControllers.register);

router.post('/login', userControllers.login)

router.get('/get', userControllers.validateToken, userControllers.get)

router.post('/logout', userControllers.logout)

module.exports = router;