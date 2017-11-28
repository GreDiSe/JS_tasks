function first(ar, col) {
    col = col ? col : 1;
    col = col > 0 ? col : 0;
    return ar.slice(0, col)
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2],-3));