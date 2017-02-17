const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

http.createServer((req,res) => {

    const url = req.url;
    // 判断是否有favicon.ion 防止多次请求
    if(url == '/favicon.ico'){
        return res.end('404');
    }

    res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');

    fs.readFile('.' + url, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        res.write(data);
        res.end();
    } )


}).listen(9100);