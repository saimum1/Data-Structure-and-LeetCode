const minimumIsland = (grid) => {
    // todo


    let islandSize= 1/0;
    let count=0;
    const visited=new Set()
    const visitedcount=[]

    for(let i = 0 ; i < grid.length ; i ++ ){
        for(let j = 0 ; j < grid[0].length ; j ++ ){
            if( explore(grid ,i , j, visited,count,visitedcount)  ===  true){
                const counted = visitedcount[visitedcount.length-1]
                // console.log("count",counted,visitedcount)
                if( counted < islandSize)  {
                    islandSize = counted
                    // visitedcount=[]
                }

                  }
        }
    }return islandSize

  };



  const explore =(grid ,i , j, visited,count,visitedcount)=>{
    let rowInbounds =  0<=i && i < grid.length
    let columnInbounds = 0<=j && j < grid[0].length

    if(!rowInbounds || !columnInbounds) return false
    if(grid[i][j] === 'W') return false

    let pos = i + ',' + j
    if(visited.has(pos)) return false

    visited.add(pos)
    count = count + 1
    visitedcount.push(count)
    
    // console.log("first",count)
    explore(grid ,i+1 ,j ,visited,count,visitedcount)
    explore(grid ,i-1 ,j ,visited,count,visitedcount)
    explore(grid ,i ,j+1 ,visited,count,visitedcount)
    explore(grid ,i ,j-1 ,visited,count,visitedcount)

    return true
}


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
console.log(minimumIsland(grid)) ; //-> 2




