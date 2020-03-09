const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.paymentmethodIndex);
router.get('/add', controller.paymentmethodAdd);
router.get('/delete', controller.paymentmethodDelete);
router.get('/edit', controller.paymentmethodEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.paymentmethodAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('paymentmethodSuccess.ejs');
        } else {
            res.render('paymentmethodFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { pMethodNo } = req.body;
    db.paymentmethodDelete(pMethodNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('paymentmethodSuccess.ejs');
        } else {
            res.render('paymentmethodFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.paymentmethodEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('paymentmethodSuccess.ejs');
        } else {
            res.render('paymentmethodFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getPaymentmethodID', function(req, res) {
    db.getPaymentmethodNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
