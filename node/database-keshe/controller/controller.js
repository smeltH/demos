const db = require('../models/db');
// 员工信息页面
exports.employeeIndex = function(req, res) {
    db.employeeInfo(function(result) {
        res.render('employeeIndex.ejs', { result });
    });
};
// 客户信息页面
exports.clientIndex = function(req, res) {
    db.clientInfo(function(result) {
        res.render('clientIndex.ejs', { result });
    });
};
// 代表信息页面
exports.delegateIndex = function(req, res) {
    db.delegateInfo(function(result) {
        res.render('delegateIndex.ejs', { result });
    });
};
// 课程种类信息页面
exports.coursetypeIndex = function(req, res) {
    db.coursetypeInfo(function(result) {
        res.render('coursetypeIndex.ejs', { result });
    });
};
// 课程信息页面
exports.courseIndex = function(req, res) {
    db.courseInfo(function(result) {
        res.render('courseIndex.ejs', { result });
    });
};
// 课程费用信息页面
exports.coursefeeIndex = function(req, res) {
    db.coursefeeInfo(function(result) {
        res.render('coursefeeIndex.ejs', { result });
    });
};
// 地点信息页面
exports.locationIndex = function(req, res) {
    db.locationInfo(function(result) {
        res.render('locationIndex.ejs', { result });
    });
};
// 预订课程信息页面
exports.bookingIndex = function(req, res) {
    db.bookingInfo(function(result) {
        res.render('bookingIndex.ejs', { result });
    });
};
// 支付方式信息页面
exports.paymentmethodIndex = function(req, res) {
    db.paymentmethodInfo(function(result) {
        res.render('paymentmethodIndex.ejs', { result });
    });
};
// 发票信息页面
exports.invoiceIndex = function(req, res) {
    db.invoiceInfo(function(result) {
        res.render('invoiceIndex.ejs', { result });
    });
};
// 登记信息页面
exports.registrationIndex = function(req, res) {
    db.registrationInfo(function(result) {
        res.render('registrationIndex.ejs', { result });
    });
};

// 员工信息添加
exports.employeeAdd = function(req, res) {
    res.render('employeeAdd.ejs');
};
// 客户信息增加
exports.clientAdd = function(req, res) {
    res.render('clientAdd.ejs');
};
// 客户信息增加
exports.delegateAdd = function(req, res) {
    res.render('delegateAdd.ejs');
};
// 课程种类信息增加
exports.coursetypeAdd = function(req, res) {
    res.render('coursetypeAdd.ejs');
};
// 课程信息增加
exports.courseAdd = function(req, res) {
    res.render('courseAdd.ejs');
};
// 课程费用信息增加
exports.coursefeeAdd = function(req, res) {
    res.render('coursefeeAdd.ejs');
};
// 地点信息增加
exports.locationAdd = function(req, res) {
    res.render('locationAdd.ejs');
};
// 预订课程信息增加
exports.bookingAdd = function(req, res) {
    res.render('bookingAdd.ejs');
};
// 支付方式信息增加
exports.paymentmethodAdd = function(req, res) {
    res.render('paymentmethodAdd.ejs');
};
// 发票信息增加
exports.invoiceAdd = function(req, res) {
    res.render('invoiceAdd.ejs');
};
// 登记信息增加
exports.registrationAdd = function(req, res) {
    res.render('registrationAdd.ejs');
};

// 员工信息删除
exports.employeeDelete = function(req, res) {
    res.render('employeeDelete.ejs');
};
// 客户信息删除
exports.clientDelete = function(req, res) {
    res.render('clientDelete.ejs');
};
// 代表信息删除
exports.delegateDelete = function(req, res) {
    res.render('delegateDelete.ejs');
};
// 课程种类信息删除
exports.coursetypeDelete = function(req, res) {
    res.render('coursetypeDelete.ejs');
};
// 课程信息删除
exports.courseDelete = function(req, res) {
    res.render('courseDelete.ejs');
};
// 课程费用信息删除
exports.coursefeeDelete = function(req, res) {
    res.render('coursefeeDelete.ejs');
};
// 地点信息删除
exports.locationDelete = function(req, res) {
    res.render('locationDelete.ejs');
};
// 预订课程信息删除
exports.bookingDelete = function(req, res) {
    res.render('bookingDelete.ejs');
};
// 支付方式信息删除
exports.paymentmethodDelete = function(req, res) {
    res.render('paymentmethodDelete.ejs');
};
// 发票信息删除
exports.invoiceDelete = function(req, res) {
    res.render('invoiceDelete.ejs');
};
// 登记信息删除
exports.registrationDelete = function(req, res) {
    res.render('registrationDelete.ejs');
};

// 员工信息编辑
exports.employeeEdit = function(req, res) {
    res.render('employeeEdit.ejs');
};
// 客户信息编辑
exports.clientEdit = function(req, res) {
    res.render('clientEdit.ejs');
};
// 代表信息编辑
exports.delegateEdit = function(req, res) {
    res.render('delegateEdit.ejs');
};
// 课程种类信息编辑
exports.coursetypeEdit = function(req, res) {
    res.render('coursetypeEdit.ejs');
};
// 课程信息编辑
exports.courseEdit = function(req, res) {
    res.render('courseEdit.ejs');
};
// 课程费用信息编辑
exports.coursefeeEdit = function(req, res) {
    res.render('coursefeeEdit.ejs');
};
// 地点信息编辑
exports.locationEdit = function(req, res) {
    res.render('locationEdit.ejs');
};
// 预订课程信息编辑
exports.bookingEdit = function(req, res) {
    res.render('bookingEdit.ejs');
};
// 支付方式信息编辑
exports.paymentmethodEdit = function(req, res) {
    res.render('paymentmethodEdit.ejs');
};
// 发票信息编辑
exports.invoiceEdit = function(req, res) {
    res.render('invoiceEdit.ejs');
};
// 登记信息编辑
exports.registrationEdit = function(req, res) {
    res.render('registrationEdit.ejs');
};
