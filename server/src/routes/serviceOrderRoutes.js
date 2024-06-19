const router = require('express').Router();

const serviceOrderControllers = require('../controllers/serviceOrderControllers');

// Rotas para ordem de serviço
router.get('/get', serviceOrderControllers.get);

router.post('/send/:id', serviceOrderControllers.validateOrder, serviceOrderControllers.send);

module.exports = router;