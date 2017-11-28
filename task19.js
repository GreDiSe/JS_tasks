function check(value) {
    return value >= 80 && value <= 120 || value >= 380 && value <= 420
}
console.log(check(5)); // false
console.log(check(50)); // true
console.log(check(124)); // false
console.log(check(400)); // true