function check(a, b) {
    return a > 0 && b < 0 || a < 0 && b > 0
}
console.log(check(5, 3)); // false
console.log(check(5, -2)); // true
console.log(check(-4, 1)); // true
console.log(check(-7, -5)); // false