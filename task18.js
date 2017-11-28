var items = [1, 2, 3, 4, 5, 7, 8, 9];
function binary_Search(ar, a) {
    let middle = Math.floor(ar.length / 2)
    if(a < middle){
        for(let i = 0; i < middle; i++){
            if(items[i] === a) return i;
        }
    }
    else{
        for(let i = middle; i < ar.length; i++){
            if(items[i] === a) return i;
        }
    }
}
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
console.log(binary_Search(items, 3)); //2