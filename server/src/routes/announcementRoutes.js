const router = require('express').Router();

const announcementControllers = require('../controllers/announcementControllers');

// Rota para obter anuncios
router.get('/get', announcementControllers.get);

router.post('/add', announcementControllers.add);

router.delete('/delete/:id', announcementControllers.delete);

router.put('/update/:id', announcementControllers.update)

module.exports = router;
