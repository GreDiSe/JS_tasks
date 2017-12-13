class List {
    constructor(head, tail) {
        this.head = head
        this.tail = tail
    }
    [Symbol.iterator]() {
        let me = this;
        return {
            next() {
                if(me){ // Если не null
                    let res = {done: false, value: me.head};
                    me = me.tail;
                    return res;
                }
                else{
                    return{
                        done: true
                    }
                }
            }
        }
    }
}

let list = new List("x", new List("y", new List("z", null)))

for (let elt of list) console.log(elt)
// → x
//   y
//   z