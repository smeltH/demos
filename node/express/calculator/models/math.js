module.exports = function (number) {
    let result = [];
    for (let i = 1; i <= number; i++) {
        if( number%i === 0 ){
            result.push(i);
        }
    }
    return result;
}
















