const router = require('express').Router();

const authController = require ('../controllers/auth-controller.js');

router.get('/signup', authController.signup);
router.get('/signin', authController.signin);

module.exports = router;