const express = require('express');
const router = express.Router();

// get all blogs
router.get('/blogs', (reg, res) => {
    Blog.find().sort({ createdAt: -1 }) //sorting based on createdAt in descending order
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        });
});

// get a create page
router.get('/blogs/create', (req, res) => {
    //res.send('<p>about page');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('create', { title: 'Create a new blog' });
})

//get a single blog
router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details'});
        })
        .catch((err) => {
            console.log(err);
        })
})

// create a blog
router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save() //sorting based on createdAt in descending order
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        });
});

router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err);
        });
})

module.exports = router;
