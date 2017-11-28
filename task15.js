function getDifferent(value) {
    return (value > 13) ? (2*(value - 13)) : (13 - value);
}
console.log(getDifferent(28)) // 28 - 13 = 15, 15 > 13, 15 * 2 = 30