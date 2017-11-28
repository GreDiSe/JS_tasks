function findDuplicate(array) {
    let dubl_ar = array.concat();
    while (dubl_ar.length !== 0)
    {
        console.log(dubl_ar[0] + ' ' + getDuplIndex(dubl_ar[0], dubl_ar) + ' times');
    }
}
function getDuplIndex(value, ar) {
    let count = 0;
    while(ar.indexOf(value) !== -1){
        count++;
        ar.splice(ar.indexOf(value), 1);
    }
    return count;
}
findDuplicate([2,2,4,6,3,3,5,7]);