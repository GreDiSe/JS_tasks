class List {
    constructor(head, tail) {
        this.head = head
        this.tail = tail
    }

    *[Symbol.iterator](){
        let cur = this;
        while(cur){
            yield cur.head;
            cur = cur.tail
        }
    }
}

let list = new List("x", new List("y", new List("z", null)))

for (let elt of list) console.log(elt)
// → x
//   y
//   z