const router = require('express').Router();

const contactControllers = require('../controllers/contactControllers');

// Rota para obter contatos
router.get('/get',contactControllers.get);

router.post('/add',contactControllers.add);

router.delete('/delete/:id', contactControllers.delete);

router.put('/update/:id', contactControllers.update)

module.exports = router;