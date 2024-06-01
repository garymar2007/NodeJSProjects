const express = require('express'); // framework
const morgan = require('morgan'); // 3rd-party logging system

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
const server = app.listen(3000);

app.use(morgan('dev'));

//middleware will hang if no 'next' function.
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next();
// })

app.get('/', (req, res) => {
    //res.send('<p>home page');
    const blogs = [
        {title: 'Java job finder', snippet: 'Not easy in 5-eye countries'},
        {title: '.Net job finder', snippet: 'Very easy in 5-eye countries'},
        {title: 'Cloud computing job finder', snippet: 'Very easy in 5-eye countries'},
      ];
    res.render('index', { title: 'Home', blogs});
})

app.get('/about', (req, res) => {
    //res.send('<p>about page');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
})

app.get('/blogs/create', (req, res) => {
    //res.send('<p>about page');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('create', { title: 'Create a new blog' });
})

// app.get('/about-us', (req, res) => {
//     //res.send('<p>about page');
//     res.redirect('/about');
// })

// app.get('/*', (req, res) => {
//     //res.send('<p>about page');
//     res.sendFile('./views/404.html', { root: __dirname });
// })

//404 page, NB: this must be last for unmatched urls above
// middleware is used here.
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
})