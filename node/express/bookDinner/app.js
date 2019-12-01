const express = require('express');
const app = express();
const controller = require('./controll/controll');
// 获取所有的订单信息
app.set('view engine','ejs');
// 保存订单
app.get('/book',controller.saveData);
app.get('/all',controller.showAll);
app.get('/all/:phone',controller.showOne);
app.use(express.static('public'));
app.listen(4444);