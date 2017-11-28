function summa(ar, i = 0, sum = 0) {
    if(i === ar.length) return sum;
    sum += ar[i];
    return summa(ar, ++i, sum)
}

console.log(summa([1,2,3,4,5,6]))