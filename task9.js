let line = 'The Quick Brown Fox';
let str = line.split('');
let result = '';
str.forEach(function (currentValue, index, array) {
    if(currentValue === currentValue.toLowerCase()) currentValue = currentValue.toUpperCase();
    else currentValue = currentValue.toLowerCase();
    result += currentValue;
});
console.log(result);
