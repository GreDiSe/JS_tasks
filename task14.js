function delDuplicate(arr) {
    arr.forEach(function (cur, i, arr){
        arr = delIndex(cur, i+1, arr);
    });
    console.log(arr);
}
delDuplicate([1,5,3,3,3,6,3,5,4,3,2,2,2,2,2,1,9]);

function delIndex(value, start,  arrow) {
    for(let i = start; i < arrow.length; i++){
        if(arrow[i] === value) {
            arrow.splice(i, 1);
            i--;
        }
    }
    return arrow;
}