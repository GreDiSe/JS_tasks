array_Clone = function(ar) {
    return ar.slice();
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));