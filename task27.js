let arr = [{name: 'user', email: '123'}, {name: 'user1', email: '123145'}];
console.log(myFunc(arr, 'name')); // ['user', 'user1']

function myFunc(ar, value) {
    let result = [];
    for(let cur of ar){
        result.push(cur.name)
    }
    return result;
}