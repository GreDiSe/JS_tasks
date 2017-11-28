function leapYears(min,max) {
    let result = [];
    for(let i = min; i <= max; i++){
        if(i % 4 === 0) result.push(i);
    }
    return result
}

console.log(leapYears(1900, 1961))