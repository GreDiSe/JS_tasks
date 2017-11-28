console.log(delEmptyValue([NaN, 0, 15, false, -22, '',undefined, 47, null]));

function delEmptyValue(ar) {
    for(let i = 0; i < ar.length; i++){
        if(!!ar[i] === false) {
            ar.splice(i, 1);
            i--;
        }
    }
    return ar;
}