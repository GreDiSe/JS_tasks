console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

function nthlargest(ar, value) {
    let max = 0;
    for(let i = 0; i < value; i++){
        if(ar[i] > max) max = ar[i];
    }
    return max
}