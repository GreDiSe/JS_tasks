function sortir(ar) {
    return ar.sort(sort())
}
function sort(a,b) {
    return (a > b)
}
console.log(sortir([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));