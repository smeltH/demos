const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8');
    let {pathname,query} = url.parse(req.url,true);
    if( pathname === '/index.html' ){
        const rs = fs.createReadStream('.'+pathname)
        // fs.readFile('.' + pathname,(err,data)=>{
        //     if( err ){
        //         console.log(err);
        //     }else{
        //         console.log(data);
        //         res.write('123')
        //         res.write(data);
        //         res.on();
        //     }
        // })
        rs.on('data',(chunk)=>{
            // 绑定data事件 也可以让可读流的数据运动
            console.log(chunk);
            console.log(chunk.length);
            res.write(chunk);
        });
        rs.on('end',()=>{
            console.log('数据读取完成');
            res.end();
        })

    }else if( pathname === '/css/style.css' ){
        // fs.readFile('.' + pathname,(err,data)=>{
        //     if( err ){
        //         console.log(err);
        //     }else{
        //         console.log(data);
        //     }
        // })
    }
});
server.listen(7766);
















