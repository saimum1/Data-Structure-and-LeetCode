const shortestPath = (edges, nodeA, nodeB) => {
    let graph={}
    for(let [u,v] of edges){
        if(!graph[v]){ graph[v]=[]}
        if(!graph[u]) {graph[u]=[]}
        graph[u].push(v)
        graph[v].push(u)
    }

    let stack=[[nodeA,0]]
    let visited=new Set()
    while(stack.length >0){
        let [current,distance] = stack.shift()
        if(current === nodeB){
            return distance
        }
            visited.add(current);
            for(let node of graph[current]){
                if(!visited.has(node)){
                    visited.add(node)
                    stack.push([node, distance + 1])

                }
            }
    }
    return -1



};







const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
console.log(  shortestPath(edges, 'w', 'z')) // -> 2