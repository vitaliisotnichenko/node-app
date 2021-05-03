const http = require('http');

const routes = require('./routes')

const server = http.createServer(routes);

server.listen(3000);

// const server = http.createServer((req, resp) => {
//     const url = req.url;
//     const method = req.method;
//
//     if (url === '/') {
//         resp.setHeader('Content-Type', 'text/html');
//         resp.write('<html>Hello, user</html>');
//         resp.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
//         return resp.end();
//     }
//
//     if (url === '/users') {
//         resp.setHeader('Content-Type', 'text/html');
//         resp.write('<html><ul><li>User1</li><li>User2</li><li>User3</li></ul></html>')
//     }
//
//     if (url === '/create-user') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk)
//         })
//         req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody.split('=')[1]);
//         });
//         resp.statusCode = 302;
//         resp.setHeader('Location', '/')
//         resp.end()
//     }
// })
//
// server.listen(3000)