const router = require('express').Router();

const multer = require('multer');

// Armazenar imagens
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
       return cb(null, './public/services-img')
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage});

// Rota para obter os serviços
const serviceControllers = require('../controllers/serviceControllers');

router.get('/get', serviceControllers.get);

router.post('/add', upload.single('icon'), serviceControllers.add);

router.delete('/delete/:id', serviceControllers.delete);

router.put('/update/:id', upload.single('icon'), serviceControllers.update)

router.get('/getCarousel', serviceControllers.getCarousel);

module.exports = router;