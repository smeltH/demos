const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

router.get('/index', controller.delegateIndex);
router.get('/add', controller.delegateAdd);
router.get('/delete', controller.delegateDelete);
router.get('/edit', controller.delegateEdit);

// 代表信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.delegateAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('delegateSuccess.ejs');
        } else {
            res.render('delegateFail.ejs');
        }
    });
});

// 代表信息删除
router.post('/delete', function(req, res) {
    const { delegateNo } = req.body;
    db.delegateDelete(delegateNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('delegateSuccess.ejs');
        } else {
            res.render('delegateFail.ejs');
        }
    });
});

// 代表信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.delegateEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('delegateSuccess.ejs');
        } else {
            res.render('delegateFail.ejs');
        }
    });
});

// 代表所有客户的id
router.post('/getDelegateID', function(req, res) {
    db.getDelegateNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
