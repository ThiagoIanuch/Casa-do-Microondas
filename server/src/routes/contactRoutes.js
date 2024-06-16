const router = require('express').Router();

const contactControllers = require('../controllers/contactControllers');

// Rota para obter contatos
router.get('/get',contactControllers.get);

router.post('/send', contactControllers.validateContact, contactControllers.send);

module.exports = router;