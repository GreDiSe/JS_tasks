function check(a, b) {
    return a+b === 50 || a === 50 || b === 50;
}
console.log(check(5,45)); // true
console.log(check(4,50)); // true
console.log(check(50,45)); // true
console.log(check(20,7)); // false