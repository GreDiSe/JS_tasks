class List {
    constructor(head, tail) {
        this.head = head
        this.tail = tail
    }

    static from(arr) {
        arr[Symbol.iterator] = function(){
            let me = this;
            let i = 0;
            return{
                next(){
                    let value =  me[i], done = false;
                    if(i === arr.length) {
                        done = true;
                    }
                    i++;
                    return {value, done}
                }
            }
        }
        for(let cur of arr) {
            return new List(cur, new List(arr[arr.indexOf(cur) + 1], new List(arr[arr.indexOf(cur) + 2], null)))
        }
    }
}
console.log(List.from([3, 2, 1]))
// → List{head: 3, tail: List{head: 2, tail: List{head: 1, tail: null}}}
