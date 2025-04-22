// const connectedComponentsCount = (graph) => {
//     // todo\

//     let count  = 0
   
//     if(graph === null){return 0}

//     const firstValue = Object.keys(graph)[0];
//     // console.log("fir",firstValue)
//     aset=new Set(firstValue)
//     let stack=[firstValue]

//     while(stack.length>0){
//         let current = stack.pop()
//         for(let i of graph[current]){
//             if(!aset.has(i)){
//                 aset.add(i)
//                 stack.push(i)
//             }
//         }count += 1
//     }
//     console.log(count)
//     return aset.size

    




   
//   };

  

// console.log(connectedComponentsCount({
//     0: [8, 1, 5],
//     1: [0],
//     5: [0, 8],
//     8: [0, 5],
//     2: [3, 4],
//     3: [2, 4],
//     4: [3, 2]
//   }))

const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (!visited.has(node)) {
            count++;
            const stack = [node];

            while (stack.length > 0) {
                const current = stack.pop();
                if (!visited.has(current)) {
                    visited.add(current);
                    for (let neighbor of graph[current]) {
                        stack.push(String(neighbor)); // normalize
                    }
                }
            }
        }
    }

    return count;
};




console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }))


