const largestComponent = (graph) => {
    // todo

    let maxcount= 0
    let checklist=new Set()
   

    for( let i in graph){
        console.log("i---->>",i)
        if(!checklist.has(graph[i])){
            checklist.add(graph[i])
            let count=0
            // console.log("count",{
            //     'maxcount':maxcount,
            //     'count':count
                
            // })
            let stack=[i]

            // console.log("stack",stack)
            while(stack.length >0){
                let current=stack.pop()
                if(!checklist.has(current)){
                    count =count+1
                    checklist.add(current)
                    // console.log("current",current)

                    for(let node of graph[current]){
                        // console.log("graph[node]",graph[node])
                        stack.push(String(node))
                        }
                }} if (count > maxcount) {
        maxcount = count; // Update max if this component is larger
      }


        }
    }return maxcount
  };




 
  console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }))