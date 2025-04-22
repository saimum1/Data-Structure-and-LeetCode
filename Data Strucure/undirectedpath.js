const undirectedPath = (edges, nodeA, nodeB) => {

    let graph={}

    if(edges.length === 0){return false}
    

    for (let [u,v] of edges){
        if(!graph[u])graph[u]=[]
        if(!graph[v])graph[v]=[]
        
        graph[u].push(v)
        graph[v].push(u)

    }

    let hasset=new Set(nodeA)
    let stack=[nodeA]
    while(stack.length > 0){
        let current = stack.shift()

        if( current === nodeB){
            return true
        }
       
            for(let i of graph[current]){
                if(!hasset.has(i)){
                hasset.add(i) 
                stack.push(i)
            }
        }
        
        
    }return false
   

};




const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
  console.log(undirectedPath(edges,  'j', 'm')) ; // -> false


//   undirected path
// Write a function, undirectedPath, that takes in an array of edges
//  for an undirected graph and two nodes (nodeA, nodeB). 
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.