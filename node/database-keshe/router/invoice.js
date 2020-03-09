const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.invoiceIndex);
router.get('/add', controller.invoiceAdd);
router.get('/delete', controller.invoiceDelete);
router.get('/edit', controller.invoiceEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.invoiceAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('invoiceSuccess.ejs');
        } else {
            res.render('invoiceFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { invoiceNo } = req.body;
    db.invoiceDelete(invoiceNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('invoiceSuccess.ejs');
        } else {
            res.render('invoiceFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.invoiceEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('invoiceSuccess.ejs');
        } else {
            res.render('invoiceFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getInvoiceID', function(req, res) {
    db.getInvoiceNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
