const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

// get all blogs
router.get('/', blogController.blog_index);

// get a create page
router.get('/create', blogController.blog_create_get);

//get a single blog
router.get('/:id', blogController.blog_details)

// create a blog
router.post('/', blogController.blog_create_post);

router.delete('/:id', blogController.blog_delete);

module.exports = router;
