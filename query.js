const fs = require('fs');
const mime = require('mime');
const path = require('path');
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

    let urlObj = url.parse(req.url,true);
    res.writeHeader(200, {'Content-Type':'text/html; charset=utf-8'});

    console.log(urlObj);
    //pathname 指的是路径名，问好和端口号中间的部分
    if(urlObj.pathname == '/apple'){
        // query 查询字符串，true，转化成对象
        res.end(urlObj.query.num+"袋苹果");
    }

    res.end(url);

});


server.listen(8080, 'localhost');
