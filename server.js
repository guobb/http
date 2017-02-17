//导入核心模块http
const http = require('http');

/**
 * 1.能在特定Ip 特定端口 客户端端请求
 * 2.当请求到来的时候能执行监听函数，并返回相应
 * 创建一个服务器
 * 指定监听 函数 每当有客户端到来的时候的函数
 * req 代表客户端的请求， 可以从中后去请求过来的信息
 * res 代表向客户端发的响应， 可以通过它向客户端发响应
 */
const server =  http.createServer((req, res) => {
    res.write('hello'); //向客户端发送端的响应
    res.end();
});

server.listen(8080,'localhost');