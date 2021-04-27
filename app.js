const http = require('http');

const server = http.createServer( (req, resp) => {
    const url = req.url;
    if (url === '/') {
        resp.write('<html>Enter Message</html>');
        resp.write('<form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form>');
        return resp.end();
    }
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>Hello</html>');
    resp.end();
});

server.listen(3000);