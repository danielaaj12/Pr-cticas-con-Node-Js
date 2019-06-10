const fs = require('fs');

function read(res) { 
    fs.readFile('./index.html', 'utf8', (err, data) => {
        res.write(data);
    });
}

module.exports = read; 