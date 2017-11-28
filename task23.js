console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

function difference(ar1, ar2) {
    ar1 = flatten(ar1);
    ar2 = flatten(ar2);
    let result = [];
    for(let i = 0; i < ar1.length; i++){
        if(ar2.indexOf(ar1[i]) === -1){
            result.push(ar1[i]);
        }
    }
    for(let i = 0; i < ar2.length; i++){
        if(ar1.indexOf(ar2[i]) === -1){
            result.push(ar2[i]);
        }
    }
    return result;
}

function flatten(a, result){
    if(!result){ result = []}
    for(let i = 0; i < a.length; i++){
        if(a[i].constructor === Array){
            flatten(a[i],result);
        }else{
            result.push(a[i]);
        }
    }
    return result;
}