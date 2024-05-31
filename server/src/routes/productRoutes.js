const router = require('express').Router();

const productControllers = require('../controllers/productControllers');

// Rota para obter produtos
router.get('/getProducts', productControllers.getProducts);
router.delete('/deleteProduct/:id', productControllers.deleteProduct);

module.exports = router;
