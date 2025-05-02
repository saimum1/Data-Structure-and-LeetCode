const sumPossible = (amount, numbers ,memo={}) => {
    // todo


    if(amount===0) return true
    if(amount < 0) return false
    if(amount in memo) return memo[amount]

    for(let i of numbers){
        // console.log(i)
        if(sumPossible(amount - i ,numbers,memo)=== true){
            memo[amount] =true
            console.log('memo',memo)
            return true
        }
    }

    memo[amount]=false
    console.log('memo',memo)
    return false
  };
  
console.log(sumPossible(8, [1, 5, 4, 12]))  