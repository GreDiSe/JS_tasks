class Queue {
    constructor() {
        this[Symbol.content] = []
    }
    put(elt) {
        return this[Symbol.content].push(elt)
    }
    take() {
        return this[Symbol.content].shift()
    }
}

let q = new Queue
q.put(1)
q.put(2)
console.log(q.take())
console.log(q.take())
