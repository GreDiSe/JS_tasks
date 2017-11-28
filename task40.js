console.log(array_range(-1, 4));

function array_range(start, col) {
    let result = [];
    for(let i = start; i < start + col; i++){
        result.push(i)
    }
    return result;
}