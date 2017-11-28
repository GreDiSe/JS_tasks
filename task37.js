console.log(array_filled(6, 'default value'));
function array_filled(col, value) {
    let result = [];
    for(let i = 0; i < col; i++){
        result.push(value)
    }
    return result;
}