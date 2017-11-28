function last(ar, col) {
    if(!col) return ar[ar.length - 1];
    col = ar.length - col;
    col = col > 0 ? col : 0;
    return ar.slice(col)
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
