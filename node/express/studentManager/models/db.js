const mongoose = require('mongoose');


/*
* 连接数据库
* */
mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser:true},(err)=>{
    if(err){
        console.log('数据库连接失败');
        return;
    }else {
        console.log('数据库连接成功');
    };

    /*
    * 设置数据库数据的类型
    * */
    let studentSchema = new mongoose.Schema({
        name: String,
        sex: String,
        chinese: Number,
        math: Number,
        english: Number
    });

    /*
    * 将数据添加到数据库的集合中去
    * */
    let Student = mongoose.model('students',studentSchema);


    // new Student({
    //     name: '黄炼',
    //     sex: '男',
    //     chinese: 70,
    //     math: 99,
    //     english: 88
    // }).save();

    /*
    * 首页渲染数据的处理
    * */
    exports.findAllData = function (callback) {
        Student.find().then((result)=>{
            callback(result);
        })
    };

    /*
    * 增加页面渲染数据的处理
    * */
    exports.addData = function (name,data,callback) {
        Student.findOne({name}).then((result)=>{
            // 判断是否已经存在
            if (!result) {
                new Student(data).save(()=>{
                        callback("数据增加成功");
                    }
                );
            }else{
                callback("该学生已存在！");
            }
        })
        // if( Student.findOne(data.name) ){
        //     callback("该学生已存在！");
        //     return;
        // }
        // new Student(data).save(()=>{
        //         callback("数据增加成功");
        //     }
        // );
    };

    /*
    * 删除页面渲染数据的处理
    * */
    exports.deleteData = function (name,callback) {
        Student.findOne({name}).then((result)=>{
            // 看是否有该数据
            if( result ){
                console.log(1);
                Student.deleteOne(result).then(()=>{
                    callback('删除成功');
                })
            }else{
                callback('没有这位同学，删除数据失败！');
            }
        })
    }
    
    /*
    * 编辑页面渲染数据的处理
    * */
    exports.editData = function (name,data,callback) {
        Student.findOne({name}).then((result)=>{
            if( result ){
                Student.updateOne(result,{$set:data}).then(()=>{
                    callback('数据更新成功');
                });
            }else{
                callback('该学生不存在，无法编辑数据');
            }
        });
    };

    /*
    * 查询页面渲染数据的处理
    * */
    exports.findData = function (name,callback) {
        Student.findOne({name}).then((result)=>{
            if( result ){
                callback(result);
            }else{
                callback('该学生不存在');
            }
        })
    }
});















