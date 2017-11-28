let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let result = [];

let max = (array1.length > array2.length) ? array1.length : array2.length;

for(let i = 0; i < max; i++){
    let first = array1[i] || 0;
    let second = array2[i] || 0;
    result.push(first + second)
}
console.log(result);