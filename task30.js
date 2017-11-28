let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
console.log(merge_array(array1, array2));

function merge_array(ar1, ar2) {
    let result = ar1.concat();
    for(let cur of ar2){
        if(ar1.indexOf(cur) === -1){
            result.push(cur)
        }
    }
    return result;

}