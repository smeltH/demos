const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const bodyParser = require('body-parser');
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './upload/');
        },
        filename: function(req, file, cb) {
            const changedName = (new Date().getTime()) + '-' + file.originalname;
            cb(null, changedName);
        }
    })
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.all('*', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
// 单文件上传
app.post('/singleFile', upload.single('singleFile'), (req, res) => {
    console.log(req.file);
    res.json({ a: '123' });
});
// 多文件上传
app.post('/files', upload.array('files'), (req, res) => {
    console.log(req.files);
    const fileList = [];
    req.files.map((item) => {
        fileList.push({ originalname: item.originalname });
    });
    res.json({ a: '123' });
});

// iframe 多文件上传
app.post('/iframeFiles', upload.array('iframeFiles'), (req, res) => {
    console.log(req.files);
    console.log(res);
    const fileList = [];
    req.files.map((item) => {
        fileList.push({ originalname: item.originalname });
    });
    res.send({ a: '123' });
});
// 无刷新上传
app.post('/xhr', upload.any('xhrFiles'), (req, res) => {
    res.json({ a: '12' });
});

// 获取图片
app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.readdir('./upload/', (err, data) => {
        if (err) {
            return;
        }
        data.map(path => {
            console.log(path);
            // res.write(path);
            fs.readFile(('./upload/' + path), 'binary', (err1, data1) => {
                if (err1) {
                    return;
                }
                res.write(data1, 'binary');
            });
        });
    });
});
app.listen('3000', (err) => {
    if (err) {
        console.log('服务器开启失败');
        return;
    }
    console.log('服务器开启成功');
});
