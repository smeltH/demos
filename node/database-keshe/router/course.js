const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.courseIndex);
router.get('/add', controller.courseAdd);
router.get('/delete', controller.courseDelete);
router.get('/edit', controller.courseEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.courseAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('courseSuccess.ejs');
        } else {
            res.render('courseFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { courseNo } = req.body;
    db.courseDelete(courseNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('courseSuccess.ejs');
        } else {
            res.render('courseFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.courseEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('courseSuccess.ejs');
        } else {
            res.render('courseFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getCourseID', function(req, res) {
    db.getCourseNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
