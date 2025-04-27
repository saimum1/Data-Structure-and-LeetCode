var maxAreaOfIsland = function(grid) {

    let maxSIze= -1/0
    let visited = new Set()

    for( let i = 0 ; i < grid.length ; i++){
        for ( let j = 0 ; j< grid[0].length ; j++){
            let countedSize=explore(grid ,i ,j ,visited)
            console.log("count",countedSize)
            if(countedSize > maxSIze ){
                maxSIze = countedSize
            }
        }
    }return maxSIze

};


const  explore = (grid ,i ,j ,visited ) =>{

    const rowInbounds = 0 <=i && i < grid.length
    const columnInbounds = 0 <=j && j < grid[0].length
    if(!rowInbounds || !columnInbounds) return 0
    if (grid[i][j] === 0) return 0;
    const pos = i + ',' + j


    if(visited.has(pos)) return 0
    visited.add(pos)
    
    size = 1
    size += explore (grid ,i+1 ,j ,visited )
    size += explore(grid ,i-1 ,j ,visited )
    size += explore (grid ,i ,j+1 ,visited )
    size += explore (grid ,i ,j-1 ,visited )
    return size
}



grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid)) ; //-> 6