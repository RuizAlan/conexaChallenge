const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/posts');
const { protect } = require('../middleware/auth');

router.get('/', protect, getPosts);

module.exports = router;
