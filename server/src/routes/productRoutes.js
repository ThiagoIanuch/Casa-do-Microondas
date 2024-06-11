const router = require('express').Router();
const multer = require('multer');

// Armazenar imagens
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
       return cb(null, './public/products-img')
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage});

// Rota para obter produtos
const productControllers = require('../controllers/productControllers');

router.get('/get', productControllers.get);

router.post('/add', upload.single('image'), productControllers.add);

router.delete('/delete/:id', productControllers.delete);

router.put('/update/:id', upload.single('image'), productControllers.update)

router.get('/getOutlet', productControllers.getOutlet);

module.exports = router;
