// const largestComponent = (graph) => {
//     // todo

//     let maxcount= 0
//     let checklist=new Set()
   

//     for( let i in graph){
//         console.log("i---->>",i)
//         if(!checklist.has(graph[i])){
//             checklist.add(graph[i])
//             let count=0
//             // console.log("count",{
//             //     'maxcount':maxcount,
//             //     'count':count
                
//             // })
//             let stack=[i]

//             // console.log("stack",stack)
//             while(stack.length >0){
//                 let current=stack.pop()
//                 if(!checklist.has(current)){
//                     count =count+1
//                     checklist.add(current)
//                     // console.log("current",current)

//                     for(let node of graph[current]){
//                         // console.log("graph[node]",graph[node])
//                         stack.push(String(node))
//                         }
//                 }} if (count > maxcount) {
//         maxcount = count; // Update max if this component is larger
//       }


//         }
//     }return maxcount
//   };



const largestComponent = (graph) => {
  const visited = new Set();
  
  let maxcount = 0;
  for (let node in graph) {
    let count=explore(graph, node, visited) 
      if(count > maxcount){
            maxcount = count
      }
  }
  return maxcount;
};


const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false; 
  visited.add(String(current));
 let count=1
  for (let neighbor of graph[current]) {
    count+=explore(graph, neighbor, visited);
  }
  return count;
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