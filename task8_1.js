// Generate a random graph
const graph = []
for (let i = 0; i < 50; i++)
    graph.push({value: Math.random(), edges: []})
for (let i = 0; i < 100; i++) {
    let from = graph[Math.floor(Math.random() * graph.length)]
    let to   = graph[Math.floor(Math.random() * graph.length)]
    if (from.edges.indexOf(to) !== -1) continue;
    from.edges.push(to)
}
let mySet = new Set();
function connectedValue(node, sum = 0) {
    if(mySet.size === 49) return sum;
    if(!Array.isArray(node)){
        try{sum += node.value}
        catch(e){sum += 0}
        mySet.add(node);
        let i = -1;
        connectedValue(node.edges[++i], sum)
    }
}

console.log(connectedValue(graph[0]));
// console.log(connectedValue(graph[24]))
// console.log(connectedValue(graph[49]))