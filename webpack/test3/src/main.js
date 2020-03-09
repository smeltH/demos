const count = 123;
const str = '字符串';
const arr = [1, 2, 3, 4];
const newArr = arr.map(item => {
    return item * 2;
});
const newArr1 = [...newArr];
console.log(count, str, newArr1);
