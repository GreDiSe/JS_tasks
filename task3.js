function range(start, end, ar = []) {
    if(start === end + 1) return ar;
    ar.push(start);
    return range(++start, end, ar)
}
console.log(range(3,8))