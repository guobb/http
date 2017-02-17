/**
 * Created by apple on 17/2/17.
 */
const http = require('http');

const server = http.createServer((req, res) => {
    let now = new Date();

    //设置内容类型的响应头
    res.setHeader('Content-type','text/html;charset=utf-8');
    res.end(now.toString());
});

server.listen('9090', 'localhost');