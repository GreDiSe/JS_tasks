function check(value) {
    return value > 20 && value < 100 || value === 400
}
console.log(check(5)); // false
console.log(check(50)); // true
console.log(check(124)); // false
console.log(check(400)); // true