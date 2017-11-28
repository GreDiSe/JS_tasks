function getFrequent (arr) {
    let max = {col: 0, value: undefined};
    arr.forEach(function (currentValue, index, array) {
        if(findFrequent(currentValue,array).col > max.col){
            max.col = findFrequent(currentValue,array).col;
            max.value = findFrequent(currentValue,array).value;
        }
    });
    return max;
}
let freq = getFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log('el: ' + freq.value + ' ' + freq.col + ' times');
function findFrequent(item, arr) {
    let col = {col: 0, value: undefined};
    for(let i = 0; i < arr.length; i++){
        if(item === arr[i]) {
            col.col++;
            col.value = arr[i];
        }
    }
    return col
}