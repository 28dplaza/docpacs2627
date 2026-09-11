require('dotenv').config()
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('testing\n'); 
    }
});
server.listen(process.env.PORT, 'localhost', () => {
    console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.PORT}/`);
});
