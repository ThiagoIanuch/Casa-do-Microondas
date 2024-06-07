const router = require('express').Router();

const brandControllers = require('../controllers/brandControllers');

// Rota para obter produtos
router.get('/get', brandControllers.get);

router.post('/add', brandControllers.add);

router.delete('/delete/:id', brandControllers.delete);

router.put('/update/:id', brandControllers.update)

module.exports = router;
