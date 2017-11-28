let arr = [1, 2, 3, 4, 5, 6];
let sum = 0, pow = 1;
arr.forEach(function (cur, i, ar) {
    sum += cur;
    pow *= cur;
});
console.log('Sum: ' + sum + ' pow: ' + pow);