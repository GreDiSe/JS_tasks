let ARRAY = [10,20,10,40,50,60,70];

function findPair(ar, sum) {
    let result = [];
    for(let i = 0; i < ar.length; i++){
        for(let j = 0; j < ar.length; j++){
            if(ar[i] + ar[j] === sum) result.push({i:i, j:j})
        }
    }
    return result;
}
console.log(findPair(ARRAY, 50))