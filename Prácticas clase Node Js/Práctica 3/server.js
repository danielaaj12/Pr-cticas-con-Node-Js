const http = require('http');
const port = 1996;

function s(f) {
    http.createServer((req, res) => {
        if(typeof f === 'function') f(res);
        console.log(`${port}`)
    }).listen(port);
}

module.exports = s;