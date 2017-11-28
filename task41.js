console.log(array_range(-3, 4));

function array_range(start, col) {
    let result = [];
    for(let i = start; i <= col; i++){
        result.push(i)
    }
    return result;
}