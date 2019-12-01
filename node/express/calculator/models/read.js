const fs = require('fs');
const math = require('./math');
exports.read = function (number,callback) {
    // 读取文件  看是否有这个文件
    fs.readFile('./data/'+number+'.txt',(err,data)=>{
        // 之前没数据
        if( err ){
            // 返回数据
            callback(-1);
        }else{
            // 有数据
            console.log('数据读取成功');
            callback([data.toString()]);
        }
    })
}
exports.save = function (number,data) {
    // 写文件
    fs.writeFile('./data/'+number+'.txt',data,{flag:'w'},(err)=>{
        // 之前没数据
        if( err ){
            console.log("数据保存失败");
        }else{
            console.log("数据保存成功");
        }
    })
}
















