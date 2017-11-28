function area (r) {
    return Math.round(Math.PI * r *r * 10) / 10;
}
function perimeter  (r) {
    return Math.round(Math.PI *2 * r * 10) / 10;
}
console.log(area(5));
console.log(perimeter(5));