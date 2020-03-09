const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const db = require('../models/db');

router.get('/index', controller.employeeIndex);
router.get('/add', controller.employeeAdd);
router.get('/delete', controller.employeeDelete);
router.get('/edit', controller.employeeEdit);

// 员工信息添加
router.post('/add', function(req, res) {
    const obj = req.body;
    db.employeeAdd(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('employeeSuccess.ejs');
        } else {
            res.render('employeeFail.ejs');
        }
    });
});

// 员工信息删除
router.post('/delete', function(req, res) {
    const { employeeNo } = req.body;
    db.employeeDelete(employeeNo, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('employeeSuccess.ejs');
        } else {
            res.render('employeeFail.ejs');
        }
    });
});

// 员工信息编辑
router.post('/edit', function(req, res) {
    const obj = req.body;
    db.employeeEdit(obj, function(result) {
        if (result && result.affectedRows > 0) {
            res.render('employeeSuccess.ejs');
        } else {
            res.render('employeeFail.ejs');
        }
    });
});

// 获取所有员工的id
router.post('/getEmployeeID', function(req, res) {
    db.getEmployeeNo(function(result) {
        res.json(result);
    });
});
module.exports = router;
