function foo(value, step, col = 0) {
    if(value === 1) return col;
    value /= step;

    return foo(value, step, ++col)
}

console.log(foo(16,2))