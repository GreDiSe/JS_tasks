function integers() {
    let i = 0
    return {
        next() {
            return {value: i++}
            },
        [Symbol.iterator]() {
            return this
        }
    }
}

function take(n, iter) {
    return {
        next() {
            for(let i of iter){
                if(i < n){
                    return{
                        done: false,
                        value: i
                    }
                }
                else{
                    return{
                        done: true
                    }

                }
            }
        },
        [Symbol.iterator]() { return this }
    }
}

for (let elt of take(3, integers()))
    console.log(elt)
// → 0
//   1
//   2
