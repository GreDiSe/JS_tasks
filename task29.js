console.log(num_string_range('a', "z", 2));

function num_string_range(start, end, step) {
    let result = [];
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);
    for(let i = start; i <= end; i += step){
        result.push(String.fromCharCode(i))
    }
    return result;
}