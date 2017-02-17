const fs = require('fs');
const mime = require('mime');
const path = require('path');
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

    let urlObj = url.parse(req.url,true);
    res.writeHeader(200, {'Content-Type':'text/html; charset=utf-8'});

    //pathname 指的是路径名，问好和端口号中间的部分
    if(urlObj.pathname == '/'){
        fs.readFile('./clock.html', (err, data) => {
            res.end(data);
        })
    } else if (urlObj.pathname == '/clock') {
        res.end(new Date().toLocaleString());
    }

});


server.listen(8080, 'localhost');
