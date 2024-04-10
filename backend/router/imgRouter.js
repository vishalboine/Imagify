const express = require('express');
const router = express.Router();
const multer = require('multer');

const { createImg, getImg } =  require('../controller/imgController')

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, 'images')
    },
    filename: (req, file, cd) => {
        cd(null, Date.now() + '-' + file.originalname)
    },
})

const upload = multer({ storage: storage })

router.route('/upload').post(upload.single('myfile')).post(createImg)

router.route('/images').get(getImg)

module.exports =  router