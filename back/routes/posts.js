const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/posts');
// const { protect } = require('../middleware/auth');

// router.get('/', protect, getPosts);
router.get('/', getPosts);

module.exports = router;
