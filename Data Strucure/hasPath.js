const hasPath = (graph, src, dst) => {

   
    let stack =[src]
    while(stack.length >0 ){
        let current = stack.pop()

        if(current === dst){
            return true
        }
        console.log("current",current)

         for(let i of graph[current]){
            stack.push(i)
            console.log(i)
         }
    }return false


    // todo


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
