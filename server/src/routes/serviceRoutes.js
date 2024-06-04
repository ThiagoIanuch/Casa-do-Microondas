const router = require('express').Router();

const serviceControllers = require('../controllers/serviceControllers');

// Rota para obter produtos
router.get('/get', serviceControllers.get);

router.post('/add', serviceControllers.add);

router.delete('/delete/:id', serviceControllers.delete);

router.put('/update/:id', serviceControllers.update)

module.exports = router;