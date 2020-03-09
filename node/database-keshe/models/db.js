const mysql = require('mysql');
// 连接数据库
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hl8075hl',
    port: '3306',
    database: 'coursemanagement'
});
con.connect(function(err) {
    if (err) {
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库连接成功');
});

// 展示员工信息
exports.employeeInfo = function(callback) {
    const sql = `
        select * from employee ORDER BY employeeNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 员工信息添加
exports.employeeAdd = function(value, callback) {
    const sql = 'INSERT INTO employee(employeeNo, ' +
        'socialSecurityNumber, ' +
        'empEmailAddress, ' +
        'title, ' +
        'firstName, ' +
        'middleName, ' +
        'lastName, ' +
        'address, ' +
        'workTelExt, ' +
        'homeTelNo, ' +
        'DOB, ' +
        'maritalStatus, ' +
        'position, ' +
        'sex, ' +
        'dateStarted, ' +
        'salary) VALUES(' +
        '?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const data = [
        value.employeeNo,
        value.socialSecurityNumber,
        value.empEmailAddress,
        value.title,
        value.firstName,
        value.middleName,
        value.lastName,
        value.address,
        value.workTelExt,
        value.homeTelNo,
        value.DOB,
        value.maritalStatus,
        value.position,
        value.sex,
        value.dateStarted,
        value.salary];
    addData(sql, data).then(result => { callback(result) });
};
// 员工信息删除
exports.employeeDelete = function(value, callback) {
    const sql = `DELETE FROM employee WHERE employeeNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改员工信息
exports.employeeEdit = function(obj, callback) {
    const {
        employeeNo,
        socialSecurityNumber,
        empEmailAddress,
        title,
        firstName,
        middleName,
        lastName,
        address,
        workTelExt,
        homeTelNo,
        DOB,
        maritalStatus,
        position,
        sex,
        dateStarted,
        salary
    } = obj;
    const sql = `UPDATE employee SET 
    socialSecurityNumber='${socialSecurityNumber}',
    empEmailAddress='${empEmailAddress}',
    title='${title}',
    firstName='${firstName}',
    middleName='${middleName}',
    lastName='${lastName}',
    address='${address}',
    workTelExt='${workTelExt}',
    homeTelNo='${homeTelNo}',
    DOB='${DOB}',
    maritalStatus='${maritalStatus}',
    position='${position}',
    sex='${sex}',
    dateStarted='${dateStarted}',
    salary='${salary}' WHERE employeeNo = '${employeeNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有员工id
exports.getEmployeeNo = function(callback) {
    const sql = 'SELECT employeeNo FROM employee ORDER BY employeeNo';
    queryData(sql).then(result => { callback(result) });
};


// 展示客户信息
exports.clientInfo = function(callback) {
    const sql = `
        select * from client ORDER BY clientNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 客户信息添加
exports.clientAdd = function(value, callback) {
    const sql = 'INSERT INTO client(clientNo, ' +
        'clientTelNo, ' +
        'clientFaxNo, ' +
        'clientWebAddres, ' +
        'clientName, ' +
        'clientStreet, ' +
        'clientCity, ' +
        'clientState, ' +
        'clientZipCode, ' +
        'contactName, ' +
        'contactTelNo, ' +
        'contactFaxNo, ' +
        'contactEmailAddres) VALUES(' +
        '?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const data = [
        value.clientNo,
        value.clientTelNo,
        value.clientFaxNo,
        value.clientWebAddres,
        value.clientName,
        value.clientStreet,
        value.clientCity,
        value.clientState,
        value.clientZipCode,
        value.contactName,
        value.contactTelNo,
        value.contactFaxNo,
        value.contactEmailAddres];
    addData(sql, data).then(result => { callback(result) });
};
// 客户信息删除
exports.clientDelete = function(value, callback) {
    const sql = `DELETE FROM client WHERE clientNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改客户信息
exports.clientEdit = function(obj, callback) {
    const {
        clientNo,
        clientTelNo,
        clientFaxNo,
        clientWebAddres,
        clientName,
        clientStreet,
        clientCity,
        clientState,
        clientZipCode,
        contactName,
        contactTelNo,
        contactFaxNo,
        contactEmailAddres
    } = obj;
    const sql = `UPDATE client SET 
    clientTelNo='${clientTelNo}',
    clientFaxNo='${clientFaxNo}',
    clientWebAddres='${clientWebAddres}',
    clientName='${clientName}',
    clientStreet='${clientStreet}',
    clientCity='${clientCity}',
    clientState='${clientState}',
    clientZipCode='${clientZipCode}',
    contactName='${contactName}',
    contactTelNo='${contactTelNo}',
    contactFaxNo='${contactFaxNo}',
    contactEmailAddres='${contactEmailAddres}' WHERE clientNo = '${clientNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有客户id
exports.getClientNo = function(callback) {
    const sql = 'SELECT clientNo FROM client ORDER BY clientNo';
    queryData(sql).then(result => { callback(result) });
};


// 展示代表信息
exports.delegateInfo = function(callback) {
    const sql = `
        select * from delegate ORDER BY delegateNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 代表信息添加
exports.delegateAdd = function(value, callback) {
    const sql = 'INSERT INTO delegate(delegateNo, ' +
        'clientNo, ' +
        'delegateTitle, ' +
        'delegateFName, ' +
        'delegateLName, ' +
        'delegateStress, ' +
        'delegateCity, ' +
        'delegateState, ' +
        'attTelNo, ' +
        'delegateZipCode, ' +
        'attEmailAddress, ' +
        'attFaxNo) VALUES(' +
        '?,?,?,?,?,?,?,?,?,?,?,?)';
    const data = [
        value.delegateNo,
        value.clientNo,
        value.delegateTitle,
        value.delegateFName,
        value.delegateLName,
        value.delegateStress,
        value.delegateCity,
        value.delegateState,
        value.attTelNo,
        value.delegateZipCode,
        value.attEmailAddress,
        value.attFaxNo];
    addData(sql, data).then(result => { callback(result) });
};
// 代表信息删除
exports.delegateDelete = function(value, callback) {
    const sql = `DELETE FROM delegate WHERE delegateNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改代表信息
exports.delegateEdit = function(obj, callback) {
    const {
        delegateNo,
        clientNo,
        delegateTitle,
        delegateFName,
        delegateLName,
        delegateStress,
        delegateCity,
        delegateState,
        attTelNo,
        delegateZipCode,
        attEmailAddress,
        attFaxNo
    } = obj;
    const sql = `UPDATE delegate SET
    clientNo='${clientNo}',
    delegateTitle='${delegateTitle}',
    delegateFName='${delegateFName}',
    delegateLName='${delegateLName}',
    delegateStress='${delegateStress}',
    delegateState='${delegateState}',
    delegateCity='${delegateCity}',
    attTelNo='${attTelNo}',
    delegateZipCode='${delegateZipCode}',
    attEmailAddress='${attEmailAddress}',
    attFaxNo='${attFaxNo}' WHERE delegateNo = '${delegateNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有代表id
exports.getDelegateNo = function(callback) {
    const sql = 'SELECT delegateNo FROM delegate ORDER BY delegateNo';
    queryData(sql).then(result => { callback(result) });
};


// 展示课程种类信息
exports.coursetypeInfo = function(callback) {
    const sql = `
        select * from coursetype ORDER BY courseTypeNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 课程种类信息添加
exports.coursetypeAdd = function(value, callback) {
    const sql = 'INSERT INTO coursetype(courseTypeNo, ' +
        'courseTypeDescription) VALUES(' +
        '?,?)';
    const data = [
        value.courseTypeNo,
        value.courseTypeDescription];
    addData(sql, data).then(result => { callback(result) });
};
// 课程种类信息删除
exports.coursetypeDelete = function(value, callback) {
    const sql = `DELETE FROM coursetype WHERE courseTypeNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改课程种类信息
exports.coursetypeEdit = function(obj, callback) {
    const {
        courseTypeNo,
        courseTypeDescription
    } = obj;
    const sql = `UPDATE coursetype SET
    courseTypeDescription='${courseTypeDescription}' WHERE courseTypeNo = '${courseTypeNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有课程种类id
exports.getCoursetypeNo = function(callback) {
    const sql = 'SELECT courseTypeNo FROM coursetype ORDER BY courseTypeNo';
    queryData(sql).then(result => { callback(result) });
};


// 展示课程信息
exports.courseInfo = function(callback) {
    const sql = `
        select * from course ORDER BY courseNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 课程信息添加
exports.courseAdd = function(value, callback) {
    const sql = 'INSERT INTO course(courseNo, ' +
        'delivererEmployeeNo, ' +
        'courseTypeNo, ' +
        'courseName, ' +
        'startDate, ' +
        'startTime, ' +
        'endDate, ' +
        'endTime, ' +
        'maxDelegates, ' +
        'confirmed, ' +
        'courseDescription) VALUES(' +
        '?,?,?,?,?,?,?,?,?,?,?)';
    const data = [
        value.courseNo,
        value.delivererEmployeeNo,
        value.courseTypeNo,
        value.courseName,
        value.startDate,
        value.startTime,
        value.endDate,
        value.endTime,
        value.maxDelegates,
        value.confirmed,
        value.courseDescription];
    addData(sql, data).then(result => { callback(result) });
};
// 课程信息删除
exports.courseDelete = function(value, callback) {
    const sql = `DELETE FROM course WHERE courseNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改课程信息
exports.courseEdit = function(obj, callback) {
    const {
        courseNo,
        delivererEmployeeNo,
        courseTypeNo,
        courseName,
        startDate,
        startTime,
        endDate,
        endTime,
        maxDelegates,
        confirmed,
        courseDescription
    } = obj;
    const sql = `UPDATE course SET
    delivererEmployeeNo='${delivererEmployeeNo}',
    courseTypeNo='${courseTypeNo}',
    courseName='${courseName}',
    startDate='${startDate}',
    startTime='${startTime}',
    endDate='${endDate}',
    endTime='${endTime}',
    maxDelegates='${maxDelegates}',
    confirmed='${confirmed}',
    courseDescription='${courseDescription}' WHERE courseNo = '${courseNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有课程id
exports.getCourseNo = function(callback) {
    const sql = 'SELECT courseNo FROM course ORDER BY courseNo';
    queryData(sql).then(result => { callback(result) });
};


// 展示课程费用信息
exports.coursefeeInfo = function(callback) {
    const sql = `
        select * from coursefee ORDER BY courseFeeNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 课程费用信息添加
exports.coursefeeAdd = function(value, callback) {
    const sql = 'INSERT INTO coursefee(courseFeeNo, ' +
        'courseNo, ' +
        'feeDescription, ' +
        'fee) VALUES(' +
        '?,?,?,?)';
    const data = [
        value.courseFeeNo,
        value.courseNo,
        value.feeDescription,
        value.fee];
    addData(sql, data).then(result => { callback(result) });
};
// 课程费用信息删除
exports.coursefeeDelete = function(value, callback) {
    const sql = `DELETE FROM coursefee WHERE courseFeeNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改课程费用信息
exports.coursefeeEdit = function(obj, callback) {
    const {
        courseFeeNo,
        courseNo,
        feeDescription,
        fee
    } = obj;
    const sql = `UPDATE coursefee SET
    courseNo='${courseNo}',
    feeDescription='${feeDescription}',
    fee='${fee}' WHERE courseFeeNo = '${courseFeeNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有课程费用id
exports.getCoursefeeNo = function(callback) {
    const sql = 'SELECT courseFeeNo FROM coursefee ORDER BY courseFeeNo';
    queryData(sql).then(result => { callback(result) });
};


// 展示地点信息
exports.locationInfo = function(callback) {
    const sql = `
        select * from location ORDER BY locationNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 地点信息添加
exports.locationAdd = function(value, callback) {
    const sql = 'INSERT INTO location(locationNo, ' +
        'locationName, ' +
        'maxSize) VALUES(' +
        '?,?,?)';
    const data = [
        value.locationNo,
        value.locationName,
        value.maxSize];
    addData(sql, data).then(result => { callback(result) });
};
// 地点信息删除
exports.locationDelete = function(value, callback) {
    const sql = `DELETE FROM location WHERE locationNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改地点信息
exports.locationEdit = function(obj, callback) {
    const {
        locationNo,
        locationName,
        maxSize
    } = obj;
    const sql = `UPDATE location SET
    locationName='${locationName}',
    maxSize='${maxSize}' WHERE locationNo = '${locationNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有地点id
exports.getLocationNo = function(callback) {
    const sql = 'SELECT locationNo FROM location ORDER BY locationNo';
    queryData(sql).then(result => { callback(result) });
};



// 订阅课程信息
exports.bookingInfo = function(callback) {
    const sql = `
        select * from booking ORDER BY bookingNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 订阅课程信息添加
exports.bookingAdd = function(value, callback) {
    const sql = 'INSERT INTO booking(bookingNo, ' +
        'locationNo, ' +
        'courseNo, ' +
        'bookingemployeeNo, ' +
        'bookingDate) VALUES(' +
        '?,?,?,?,?)';
    const data = [
        value.bookingNo,
        value.locationNo,
        value.courseNo,
        value.bookingemployeeNo,
        value.bookingDate];
    addData(sql, data).then(result => { callback(result) });
};
// 订阅课程信息删除
exports.bookingDelete = function(value, callback) {
    const sql = `DELETE FROM booking WHERE bookingNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改订阅课程信息
exports.bookingEdit = function(obj, callback) {
    const {
        bookingNo,
        locationNo,
        courseNo,
        bookingemployeeNo,
        bookingDate
    } = obj;
    const sql = `UPDATE booking SET
    locationNo='${locationNo}',
    courseNo='${courseNo}',
    bookingemployeeNo='${bookingemployeeNo}',
    bookingDate='${bookingDate}' WHERE bookingNo = '${bookingNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有订阅课程id
exports.getBookingNo = function(callback) {
    const sql = 'SELECT bookingNo FROM booking ORDER BY bookingNo';
    queryData(sql).then(result => { callback(result) });
};



// 支付方式信息
exports.paymentmethodInfo = function(callback) {
    const sql = `
        select * from paymentmethod ORDER BY pMethodNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 支付方式信息添加
exports.paymentmethodAdd = function(value, callback) {
    const sql = 'INSERT INTO paymentmethod(pMethodNo, ' +
        'paymentMethod) VALUES(' +
        '?,?)';
    const data = [
        value.pMethodNo,
        value.paymentMethod];
    addData(sql, data).then(result => { callback(result) });
};
// 支付方式信息删除
exports.paymentmethodDelete = function(value, callback) {
    const sql = `DELETE FROM paymentmethod WHERE pMethodNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改支付方式信息
exports.paymentmethodEdit = function(obj, callback) {
    const {
        pMethodNo,
        paymentMethod
    } = obj;
    const sql = `UPDATE paymentmethod SET
    paymentMethod='${paymentMethod}' WHERE pMethodNo = '${pMethodNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有支付方式id
exports.getPaymentmethodNo = function(callback) {
    const sql = 'SELECT pMethodNo FROM paymentmethod ORDER BY pMethodNo';
    queryData(sql).then(result => { callback(result) });
};



// 发票信息
exports.invoiceInfo = function(callback) {
    const sql = `
        select * from invoice ORDER BY invoiceNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 发票信息添加
exports.invoiceAdd = function(value, callback) {
    const sql = 'INSERT INTO invoice(invoiceNo, ' +
        'registrationNo, ' +
        'pMethodNo, ' +
        'dateRaised, ' +
        'datePaid, ' +
        'creditCardNo, ' +
        'holdersName, ' +
        'expiryDate) VALUES(' +
        '?,?,?,?,?,?,?,?)';
    const data = [
        value.invoiceNo,
        value.registrationNo,
        value.pMethodNo,
        value.dateRaised,
        value.datePaid,
        value.creditCardNo,
        value.holdersName,
        value.expiryDate];
    addData(sql, data).then(result => { callback(result) });
};
// 发票信息删除
exports.invoiceDelete = function(value, callback) {
    const sql = `DELETE FROM invoice WHERE invoiceNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改发票信息
exports.invoiceEdit = function(obj, callback) {
    const {
        invoiceNo,
        registrationNo,
        pMethodNo,
        dateRaised,
        datePaid,
        creditCardNo,
        holdersName,
        expiryDate
    } = obj;
    const sql = `UPDATE invoice SET
    registrationNo='${registrationNo}',
    pMethodNo='${pMethodNo}',
    dateRaised='${dateRaised}',
    datePaid='${datePaid}',
    creditCardNo='${creditCardNo}',
    holdersName='${holdersName}',
    expiryDate='${expiryDate}' WHERE invoiceNo = '${invoiceNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有发票id
exports.getInvoiceNo = function(callback) {
    const sql = 'SELECT invoiceNo FROM invoice ORDER BY invoiceNo';
    queryData(sql).then(result => { callback(result) });
};



// 登记信息
exports.registrationInfo = function(callback) {
    const sql = `
        select * from registration ORDER BY registrationNo`;
    queryData(sql).then(result => {
        callback(result);
    });
};
// 登记信息添加
exports.registrationAdd = function(value, callback) {
    const sql = 'INSERT INTO registration(registrationNo, ' +
        'delegateNo, ' +
        'courseFeeNo, ' +
        'registerEmployeeNo, ' +
        'courseNo, ' +
        'registrationDate) VALUES(' +
        '?,?,?,?,?,?)';
    const data = [
        value.registrationNo,
        value.delegateNo,
        value.courseFeeNo,
        value.registerEmployeeNo,
        value.courseNo,
        value.registrationDate];
    addData(sql, data).then(result => { callback(result) });
};
// 登记信息删除
exports.registrationDelete = function(value, callback) {
    const sql = `DELETE FROM registration WHERE registrationNo=${value}`;
    queryData(sql).then(result => { callback(result) });
};
// 修改登记信息
exports.registrationEdit = function(obj, callback) {
    const {
        registrationNo,
        delegateNo,
        courseFeeNo,
        registerEmployeeNo,
        courseNo,
        registrationDate
    } = obj;
    const sql = `UPDATE registration SET
    delegateNo='${delegateNo}',
    courseFeeNo='${courseFeeNo}',
    registerEmployeeNo='${registerEmployeeNo}',
    courseNo='${courseNo}',
    registrationDate='${registrationDate}' WHERE registrationNo = '${registrationNo}'
    `;
    queryData(sql).then(result => { callback(result) });
};
// 查询所有登记id
exports.getRegistrationNo = function(callback) {
    const sql = 'SELECT registrationNo FROM registration ORDER BY registrationNo';
    queryData(sql).then(result => { callback(result) });
};


// 查询语句
function queryData(sql) {
    return new Promise((resolve) => {
        con.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                resolve();
                console.log('sql语句执行失败~~~');
                return;
            }
            const resultStr = JSON.stringify(result);
            const resultObj = JSON.parse(resultStr);
            console.log('sql语句执行成功!');
            resolve(resultObj);
        });
    });
}

// 插入数据语句
function addData(sql, data) {
    return new Promise((resolve) => {
        con.query(sql, data, (err, result) => {
            if (err) {
                console.log(err);
                console.log('sql语句执行失败~~~');
                resolve();
                return;
            }
            const resultStr = JSON.stringify(result);
            const resultObj = JSON.parse(resultStr);
            resolve(resultObj);
        });
    });
}
