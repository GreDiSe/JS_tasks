function* integers() {
    for (let i = 0;; i++) yield i
}

function* take(n, iter) {
    for(let current of iter){
        if(current > n - 1) {
            iter.return();
            return;
        }
        yield current;
    }
}

for (let elt of take(3, integers()))
    console.log(elt)
// → 0
//   1
//   2
