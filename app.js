const http = require('http');

const server = http.createServer( (req, resp) => {
    console.log(req);
});

server.listen(3000);