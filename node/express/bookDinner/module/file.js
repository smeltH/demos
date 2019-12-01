const fs = require('fs');
exports.save = function (path,data,callback) {
    if( data ){
        data = JSON.stringify(data);
        fs.writeFile('./data/'+path+'.txt',data,(err)=>{
            if( !err ){
                callback('订餐成功！请耐心等待....');
            }
        });
    }
}
exports.getAll = function (callback) {
    fs.readdir('./data',(err,fileList)=>{
        if( err ){
            callback(-1);
        }else{
            let arrList = fileList.map((value)=>{
                return value.replace('.txt','');
            })
            callback(arrList);
        }
    });
}
exports.getOne = function (path,callback) {
    fs.readFile('./data/'+path+'.txt',(err,data)=>{
        if( err ){
            callback(-1);
        }else{
            callback(JSON.parse(data.toString()));
        }
    });
}















