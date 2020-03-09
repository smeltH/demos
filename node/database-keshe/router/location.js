const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

// 展示客户信息页
router.get('/index', controller.locationIndex);
router.get('/add', controller.locationAdd);
router.get('/delete', controller.locationDelete);
router.get('/edit', controller.locationEdit);

// 客户信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.locationAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('locationSuccess.ejs');
        } else {
            res.render('locationFail.ejs');
        }
    });
});

// 客户信息删除
router.post('/delete', function(req, res) {
    const { locationNo } = req.body;
    db.locationDelete(locationNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('locationSuccess.ejs');
        } else {
            res.render('locationFail.ejs');
        }
    });
});

// 客户信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.locationEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('locationSuccess.ejs');
        } else {
            res.render('locationFail.ejs');
        }
    });
});

// 获取所有客户的id
router.post('/getLocationID', function(req, res) {
    db.getLocationNo(function(result) {
        res.json(result);
    });
});

module.exports = router;
