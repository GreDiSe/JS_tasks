console.log(contains([2, 5, 9, 6],5));

function contains(ar, value) {
    return !!(ar.indexOf(value) + 1)
}