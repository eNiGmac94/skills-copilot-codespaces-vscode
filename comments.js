// Create web server application that responds to requests to /comments with a JSON file containing comments from the comments.json file

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file: ', err);
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        }
    });
});

server.listen(3000, () => console.log('Listening on port 3000'));