const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.coursefeeIndex);
router.get('/add', controller.coursefeeAdd);
router.get('/delete', controller.coursefeeDelete);
router.get('/edit', controller.coursefeeEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.coursefeeAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('coursefeeSuccess.ejs');
        } else {
            res.render('coursefeeFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { courseFeeNo } = req.body;
    db.coursefeeDelete(courseFeeNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('coursefeeSuccess.ejs');
        } else {
            res.render('coursefeeFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.coursefeeEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('coursefeeSuccess.ejs');
        } else {
            res.render('coursefeeFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getCoursefeeID', function(req, res) {
    db.getCoursefeeNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
