const express = require('express');
const router = express.Router();
const { getPhotos } = require('../controllers/photos');
const { protect } = require('../middleware/auth');

router.get('/', protect, getPhotos);

module.exports = router;
