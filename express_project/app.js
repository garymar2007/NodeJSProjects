const express = require('express');

//express app
const app = express();

// listen for requests
const server = app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>home page');
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    //res.send('<p>about page');
    res.sendFile('./views/about.html', { root: __dirname });
})

app.get('/about-us', (req, res) => {
    //res.send('<p>about page');
    res.redirect('/about');
})

// app.get('/*', (req, res) => {
//     //res.send('<p>about page');
//     res.sendFile('./views/404.html', { root: __dirname });
// })

//404 page, NB: this must be last for unmatched urls above
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})