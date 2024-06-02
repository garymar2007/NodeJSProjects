// blog_index, blog_details, blog_create_get, blog_create_post, blog_detete
const Blog = require('../models/blog');

const blog_index = (reg, res) => {
    Blog.find().sort({ createdAt: -1 }) //sorting based on createdAt in descending order
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details'});
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save() //sorting based on createdAt in descending order
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}

