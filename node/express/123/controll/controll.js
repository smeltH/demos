const file = require('../module/file.js');
exports.saveData = (req, res) => {
    const info = req.query;
    const { phone, food } = info;
    // 保存数据
    file.save(phone, info, (data) => {
        res.send(data);
    });
    // 展示所有数据
};
exports.showAll = function(req, res) {
    file.getAll((msg) => {
        res.render('all', {
            info: msg
        });
    });
};
exports.showOne = function(req, res) {
    file.getOne(req.params.phone, (info) => {
        console.log(info);
        res.render('eachOne', info);
    });
};
