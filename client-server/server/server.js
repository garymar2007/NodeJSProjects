const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log('request made');
    //console.log(req);
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel="stylesheet" href="#"></head');
    // res.write('<p>Hello, welcome to Node.js world!</p>');
    // res.write('<h2>Hello, welcome to Node.js world!</h2>');

    //determine the Route
    let path = '../views/';
    switch(req.url) {
        case '/': 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000...');
});