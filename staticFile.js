const http = require('http');
const fs = require("fs");

http.createServer((req,res) => {

        const url = req.url;

        console.log(url);
        if (url == '/index.html') {

            res.setHeader('Content-Type','text/html;charset=utf-8');
            //指定文件路径 设置编码 得到data就是字符串类型的

            fs.readFile('./index.html', 'utf8', (err, data) => {
                if(err){
                    console.log(err);
                    return;
                }
                res.write(data);
                res.end();
            } )
        } else if(url == '/style.css'){
            fs.readFile('./style.css', 'utf8', (err, data) => {
                if(err) {
                    Error(err);
                    return;
                }
                res.write(data);
                res.end();

            })
        }


}).listen(9100);