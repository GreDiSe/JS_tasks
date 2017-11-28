function shuffleArray(ar) {
    return ar.sort(randomSort)
}
function randomSort(a,b) {
    return Math.round(Math.random());
}
console.log(shuffleArray([1,2,3,4,5,6,7,8,9,10]));
