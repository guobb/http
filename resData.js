/**
 * Created by apple on 17/2/17.
 */
const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.method); //请求的方法
    console.log(req.url);    //请求的url
    console.log(req.headers);//请求的头

    res.statusCode = 404;  //调的响应码
    //设置响应头
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.write('hello');    //写的响应体

    setTimeout(() => {
        res.write('-node-');
        res.end('over');
    },2000);
});

server.listen(8080, 'localhost');