console.log(union([1, 2, 3], [100, 2, 1, 10]));

function union(ar1,ar2) {
    let result =  ar1.length > ar2.length ? ar1.concat() : ar2.concat()
    let max = ar1.length > ar2.length ? ar2.length : ar1.length;
    for(let i = 0; i < max; i++){
        if(result.indexOf(ar2[i]) === -1){
            result.push(ar2[i]);
        }
    }
    return result;
}