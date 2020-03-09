const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.coursetypeIndex);
router.get('/add', controller.coursetypeAdd);
router.get('/delete', controller.coursetypeDelete);
router.get('/edit', controller.coursetypeEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.coursetypeAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('coursetypeSuccess.ejs');
        } else {
            res.render('coursetypeFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { courseTypeNo } = req.body;
    db.coursetypeDelete(courseTypeNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('coursetypeSuccess.ejs');
        } else {
            res.render('coursetypeFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.coursetypeEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('coursetypeSuccess.ejs');
        } else {
            res.render('coursetypeFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getCoursetypeID', function(req, res) {
    db.getCoursetypeNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
