// const hasPath = (graph, src, dst) => {

   
//     let stack =[src]
//     while(stack.length >0 ){
//         let current = stack.pop()

//         if(current === dst){
//             return true
//         }
//         console.log("current",current)

//          for(let i of graph[current]){
//             stack.push(i)
//             console.log(i)
//          }
//     }return false


//     // todo


//   };
  

const hasPath = (graph, src, dst) => {
    if(src === dst) return true
    for(let negi of graph[src]){
      if (hasPath(graph,negi,dst) === true){
        return true
      }
    }
    return false
  };
  





  const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  console.log(hasPath(graph, 'f', 'k')) 
