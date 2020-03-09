const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.registrationIndex);
router.get('/add', controller.registrationAdd);
router.get('/delete', controller.registrationDelete);
router.get('/edit', controller.registrationEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.registrationAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('registrationSuccess.ejs');
        } else {
            res.render('registrationFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { registrationNo } = req.body;
    db.registrationDelete(registrationNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('registrationSuccess.ejs');
        } else {
            res.render('registrationFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.registrationEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('registrationSuccess.ejs');
        } else {
            res.render('registrationFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getRegistrationID', function(req, res) {
    db.getRegistrationNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
