const express = require('express');
const app = express();
const controller = require('./controller/controller');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

/*
* 首页的渲染且设计首页路由
* */
app.get('/', controller.showIndex);

/*
* 增加页面的渲染并且设置增加页面路由
* */
app.get('/add', controller.showAdd);

/*
* delete页面渲染且设计删除页面路由
* */
app.get('/delete', controller.showDelete);

/*
* 编辑页面渲染并且设置路由
* */
app.get('/edit', controller.showEdit);

/*
* 查询页面渲染并且设置路由
* */
app.get('/look', controller.showLook);

/*
* 将请求的数据处理
* */
app.use(bodyParser.urlencoded({
    extended: false
}));

/*
* 数据增加保存
* */
app.post('/save', controller.addOneData);

/*
* 删除数据保存
* */
app.post('/deleteOne', controller.deleteOneData);

/*
* 编辑页面数据保存
* */
app.post('/editOne', controller.editOnedata);

/*
* 查询页面数据保存
* */
app.post('/lookOne', controller.lookOnedata);

app.use(express.static('public'));
app.listen(33333);
