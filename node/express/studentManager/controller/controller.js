const db = require('../models/db');

/*
* 首页渲染
* */
exports.showIndex = (req, res) => {
    /*
    * 首页进行展示
    * */
    db.findAllData((result) => {
        res.render('index.ejs', {
            result
        });
    });
};

/*
* 增加页面渲染
* */
exports.showAdd = (req, res) => {
    res.render('add.ejs');
};

/*
* 删除页面渲染
* */
exports.showDelete = function(req, res) {
    res.render('delete.ejs');
};

/*
* 编辑页面渲染
* */
exports.showEdit = function(req, res) {
    res.render('employeeEdit.ejs');
};

exports.showLook = function(req, res) {
    res.render('success.ejs');
};

/*
* 获得前端需要增加的数据
* */
exports.addOneData = function(req, res) {
    db.addData(req.body.name, req.body, (msg) => {
        res.send(msg);
    });
};

/*
* 获得前端需要删除的数据
* */
exports.deleteOneData = function(req, res) {
    db.deleteData(req.body.name, (data) => {
        res.send(data);
    });
};

/*
* 获得前端需要编辑的数据
* */
exports.editOnedata = function(req, res) {
    db.editData(req.body.name, req.body, (msg) => {
        res.send(msg);
    });
};

/*
* 获得前端需要编辑的数据
* */
exports.lookOnedata = function(req, res) {
    db.findData(req.body.name, (msg) => {
        res.send(msg);
    });
};
