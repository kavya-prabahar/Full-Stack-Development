const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write("<h1>This is my first message</h1>");
    res.write("<h2>Welcome to KCT learning</h2>");
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("This is my first message");
    console.log("Welcome to KCT learning");
    console.log(`Server running at http://localhost:${PORT}`);
});
