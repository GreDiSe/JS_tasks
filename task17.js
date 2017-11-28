function hasKey(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
console.log(hasKey({name: 'Keks', age: 43, made: 'by mother'}, 'name')); // true
console.log(hasKey({name: 'Keks', age: 43, made: 'by mother'}, 'nope')); // false