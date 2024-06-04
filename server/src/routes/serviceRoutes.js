
const router = require('express').Router();

const serviceControllers = require('../controllers/serviceControllers');

// Rota para obter produtos
router.get('/get', serviceControllers.get);

module.exports = router;