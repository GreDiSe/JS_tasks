function replace(...args) { //array, from, to, elements
    let [array, from = 0, to = 0, elements = 0] = args
    array.splice.apply(array, [from, to - from].concat(elements))
}

let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, [3, 4, 5])
console.log(testArray)

function copyReplace(...args) {
    let [array, from = 0, to = 0, elements = 0] = args;
    return array.slice(0, from).concat(elements).concat(array.slice(to))
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

let birdsSeen = []
function recordBirds(time, ...names) {
    birdsSeen.push({time, birds: [].slice.call(names)})
}

recordBirds(new Date, "sparrow", "robin", "chirik")
console.log(birdsSeen)