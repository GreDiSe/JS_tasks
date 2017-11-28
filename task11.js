function sq(ar) {
    let sum = 0;
    ar.forEach(function (cur, index, arr) {
        sum += cur*cur;
    });
    return sum
}
console.log(sq([0,1,2,3,4]));