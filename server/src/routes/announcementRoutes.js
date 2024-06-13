const router = require('express').Router();


const multer = require('multer');

// Armazenar imagens
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
       return cb(null, './public/announcements-img')
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage});

const announcementControllers = require('../controllers/announcementControllers');

// Rota para obter anuncios
router.get('/get', announcementControllers.get);

router.post('/add', upload.single('image'), announcementControllers.add);

router.delete('/delete/:id', announcementControllers.delete);

router.put('/update/:id', upload.single('image'), announcementControllers.update)

router.get('/getCarousel/',announcementControllers.getCarousel)

module.exports = router;
