const http = require('http');

const server = http.createServer( (req, resp) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>Hello</html>');
    resp.end();
});

server.listen(3000);