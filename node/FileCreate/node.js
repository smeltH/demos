// const fs = require('fs');
// fs.writeFile('C:/Users/LENOVO/Desktop/node1111/hello.txt','hello node,im public',{flag:'a'},(err)=>{
//     if( err ){
//         console,log(err);
//     }else{
//         console.log('数据写入成功');
//     }
// });
// fs.readFile('C:/Users/LENOVO/Desktop/node1111/hello.txt',(err,data)=>{
//     if( err ){
//         console.log(err);
//     }else {
//         console.log(data.toString());
//     }
// });
// fs.unlink('C:/Users/LENOVO/Desktop/node1111/hello.txt',(err)=>{
//     if( err ){
//         console.log(err);
//     }else {
//         console.log(2);
//     }
// })

// const http = require('http');
// let server = http.createServer((req,res)=>{
//     res.setHeader('content-type','text/html;charset=utf-8');
//     res.write('<h2>我是首页</h2>');
//     res.write(req.method+'<br>');
//     res.end('no such file');
// })
// server.listen(3000);

// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// let server = http.createServer((req,res)=>{
//     // res.setHeader('content-type','text/html;charset=utf-8');
//     let {pathname,query} = url.parse(req.url,true);
//     // res.write(pathname);
//     // res.write(query);
//     if(pathname === '/index.html'){
//         fs.readFile('./tanHomework/Dream/FileDragSend'+pathname,(err,data)=>{
//             if(err){
//                 res.end('no such file')
//             }else{
//                 res.end(data);
//             }
//         })
//     }else if(pathname === '/css/css01.css'){
//         fs.readFile('.'+pathname,(err,data)=>{
//             if(err){
//                 res.end('no such file')
//             }else{
//                 res.end(data);
//             }
//         })
//     }else if(pathname === '/images/01.png'){
//         fs.readFile('.'+pathname,(err,data)=>{
//             if(err){
//                 res.end('no such file')
//             }else{
//                 res.end(data);
//             }
//         })
//     }
// })
// server.listen(3000);

const url = require('url');
const fs = require('fs');
const http = require('http');
let server = http.createServer(err,(req,res)=>{
    if(err){
        console.log(err)
    }else{
        // post 数据是存放在buffer中的，需要使用querystring模块来获取
        let str = '';
        req.on('data',(chunk)=>{
            str += chunk;
        })
        req.on('end',()=>{
            let post  = qs.parse(str);
            console.log(post);// 返回form提交的数据转换后的对象
            res.end('OK');
        })
    }
})
server.listen(3000);















