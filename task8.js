function search(ar, value, i = 0) {
    if(ar[i] === value) return i;

    return search(ar,value, ++i)
}
console.log(search([0,1,2,3,4,5,6], 5));