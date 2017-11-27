function square(a, b, c) {
    let p = (a + b + c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))

}
console.log('Square: ' + square(3,4,5));