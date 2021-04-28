const http = require('http');
const fs = require('fs')

const server = http.createServer( (req, resp) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        resp.write('<html>Enter Message</html>');
        resp.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        return resp.end();
    }
    if(url === '/message' && method === 'POST') {
        //Parsing request bodies
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                resp.statusCode = 302;
                resp.setHeader('Location', '/')
                return resp.end()
            });
        })
    }

    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>Hello</html>');
    resp.end();
});

server.listen(3000);