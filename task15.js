function retrieve(obj) {
    let result = [];
    for (let cur in obj){
        result.push([cur, obj[cur]])
    }
    return result;
}
console.log(retrieve({name: 'keks', age: 43, made: 'by mother'}))