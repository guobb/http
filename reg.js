const fs = require('fs');
const mime = require('mime');
const path = require('path');
const http = require('http');
const url = require('url');

let user = [];

const server = http.createServer((req, res) => {

    let urlObj = url.parse(req.url,true);
    res.writeHeader(200, {'Content-Type':'text/html; charset=utf-8'});

    //pathname 指的是路径名，问好和端口号中间的部分
    if(urlObj.pathname == '/'){
        fs.readFile('./reg.html', (err, data) => {
            res.end(data);
        })
    } else if (urlObj.pathname == '/reg') {
        //每当服务器收到客户端发过来的一段数据的时候会触发data事件

        let str = '';
        req.on('data',(data) => {
            str += data.toString();
        });
        // 当所有的数据全部接受完毕的时候触发end事件，这是请求体的数据
        req.on('end',() => {
            console.log(str);
            // 转成对象追加到客户列表中
            user.push(JSON.parse(str));
            // 最后返回用户列表
            res.end(str);
        });
    }

});


server.listen(8080, 'localhost');
