const a = '我是a.js文件';
let count = 1;
const b = '我是b变量';
function add() {
    count++;
    console.log('count: ', count);
    return count;
}
module.exports = { a, count, add };
