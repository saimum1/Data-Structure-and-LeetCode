const islandCount = (grid) => {
  
  const visited = new Set()
  let count = 0

  for(let i = 0 ; i < grid.length ;  i ++){
    for(let j = 0 ; j < grid[0].length ;  j ++){

       if(explore(grid,i,j,visited) === true){
          count +=1
       } 
    }
  }return count


    
  };
  const explore=(grid,i,j,visited)=>{
    const rowInbounds= 0<=i && i < grid.length
    const columnInbounds= 0<=j && j < grid[0].length

    if(!rowInbounds || ! columnInbounds) return false
    if(!rowInbounds || ! columnInbounds) return false
    if(grid[i][j] === 'W') return false

    const pos = i + ',' + j
    
    if(visited.has(pos))return false
        
        visited.add(pos)
        explore(grid,i+1,j,visited)
        explore(grid,i-1,j,visited)
        explore(grid,i,j+1,visited)
        explore(grid,i,j-1,visited)

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
  
  console.log(islandCount(grid)) ; // -> 3'





  