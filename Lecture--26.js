//web server

var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is homepage</p></body></html>');
        res.end();
    } else if (req.url == '/student') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student page</p></body></html>');
        res.end();
    } else if (req.url == '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: "Hello orld"}));
        res.end();
    }
});

server.listen(8080);
console.log('Nodejs web server at port 5000 is  running');


//resmode


//реляционные базы данных

