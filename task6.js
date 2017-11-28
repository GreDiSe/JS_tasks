function number(num) {
    num += '';
    num = num.split('');
    let result = '';
    for(let i = 0; i < num.length - 1; i++){
        if(Number(num[i]) % 2 === 0 && Number(num[i + 1]) % 2 === 0){
            num.splice(i,1, num[i],'-');
        }
    }
    for(let i = 0; i < num.length; i++){
        result += num[i]
    }
    return result;
}
console.log(number(3445267));