const router = require('express').Router();

const productControllers = require('../controllers/productControllers');

// Rota para obter produtos
router.get('/get', productControllers.get);

router.post('/add', productControllers.add);

router.delete('/delete/:id', productControllers.delete);

router.put('/update/:id', productControllers.update)

module.exports = router;
