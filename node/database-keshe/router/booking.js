const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.bookingIndex);
router.get('/add', controller.bookingAdd);
router.get('/delete', controller.bookingDelete);
router.get('/edit', controller.bookingEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.bookingAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('bookingSuccess.ejs');
        } else {
            res.render('bookingFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { bookingNo } = req.body;
    db.bookingDelete(bookingNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('bookingSuccess.ejs');
        } else {
            res.render('bookingFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.bookingEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('bookingSuccess.ejs');
        } else {
            res.render('bookingFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getBookingID', function(req, res) {
    db.getBookingNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
