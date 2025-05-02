const maxPathSum = (grid, r=0, c=0,memo={}) => {
    // todo
     const pos = r + ',' + c ;
     if(pos in memo) return memo[pos]
     if(r === grid.length || c === grid[0].length) return -Infinity
     if(r === grid.length-1 && c === grid[0].length-1) return grid[r][c]
   

     let countr=maxPathSum(grid,r+1,c,memo)
     let countb=maxPathSum(grid,r,c+1,memo)
     memo[pos]=grid[r][c] +  Math.max(countr,countb)

     return memo[pos]
  };

  const grid = [
    [1, 3, 12],
    [5, 1, 1],
    [3, 6, 1],
  ];

  console.log(maxPathSum(grid)) 