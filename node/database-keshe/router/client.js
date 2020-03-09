const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.clientIndex);
router.get('/add', controller.clientAdd);
router.get('/delete', controller.clientDelete);
router.get('/edit', controller.clientEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.clientAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('clientSuccess.ejs');
        } else {
            res.render('clientFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { clientNo } = req.body;
    db.clientDelete(clientNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('clientSuccess.ejs');
        } else {
            res.render('clientFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.clientEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('clientSuccess.ejs');
        } else {
            res.render('clientFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getClientID', function(req, res) {
    db.getClientNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
