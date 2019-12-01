const math = require('../models/math');
const file = require('../models/read');
exports.showResult = function(req,res){
    const date = new Date();
    const number = req.params.rounter;
    file.read(number,function (backData) {
        if( backData === -1 ){
            let result = math(number);
            file.save(number,result);
            res.render('showResult',{
                arr:result,
                number,
                time: new Date()-date
            });
        }else{
            let result = backData;
            console.log(result);
            res.render('showResult',{
                arr:result,
                number,
                time: new Date()-date
            });
        }
    });

}















