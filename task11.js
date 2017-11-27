function converTo(f) {
    return ((f-32)/9)*5
}
function converFrom(c) {
    return (c/5*9)+32
}
let C = 60;
let F = 140;
console.log(F + ' F is ' + converTo(F) + ' C');
console.log(C + ' C is ' + converFrom(C) + ' F');