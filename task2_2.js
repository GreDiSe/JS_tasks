function startNode(type, value, obj) {
    let {sourceProperty, sourceValue} = obj;
    return {type: type, value: value, [sourceProperty]: sourceValue }
}

console.log(startNode("Identifier", "foo", {
    sourceProperty: "src",
    sourceValue: "bar.js"
}))
// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}