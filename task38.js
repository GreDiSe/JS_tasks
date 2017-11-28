console.log(move([10, 20, 30, 40, 50], -2, -4));
console.log(move([10, 20, 30, 40, 50], 2, 4));

function move(ar, i, j) {
    i = (i < 0) ? (ar.length + i) : i;
    j = (j < 0) ? (ar.length + j) : j;
    let tmp = ar[i];
    ar[i] = ar[j];
    ar[j] = tmp;

    return ar;
}