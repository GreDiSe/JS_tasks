function retrieve(obj) {
    let result = {};
    for (let cur in obj){
        result[obj[cur]] = cur;
    }
    return result;
}
console.log(retrieve({name: 'Keks', age: 43, made: 'by mother'}))