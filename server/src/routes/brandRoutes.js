const router = require('express').Router();

const multer = require('multer');

// Armazenar imagens
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
       return cb(null, './public/brands-img')
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage});

// Rota para obter as marcas
const brandControllers = require('../controllers/brandControllers');

router.get('/get', brandControllers.get);

router.post('/add', upload.single('image'), brandControllers.add);

router.delete('/delete/:id', brandControllers.delete);

router.put('/update/:id', upload.single('image'), brandControllers.update)

router.get('/getCarousel', brandControllers.getCarousel);

module.exports = router;
