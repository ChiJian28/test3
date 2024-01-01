const express = require('express');

const {
    createImage
} = require('../controller/createImageController.js');

const router = express.Router();

router.post('/', createImage);

module.exports = router;