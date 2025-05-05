const summingSquares = (n,memo={}) => {
    // todo
    if(n in memo) return memo[n]
    if(n === 0) return 0

    let minSqr=Infinity
    for(let i = 1 ; i<=Math.sqrt(n) ; i++){
        let sqr = i * i
        numSqr= 1 + summingSquares(n-sqr,memo)
        minSqr=Math.min(numSqr,minSqr)
    }

    memo[n]=minSqr
    return minSqr

  };


  console.log(summingSquares(31))    