const countingChange = (amount, coins,memo={},i=0) => {
    // todo
    let key = amount + ',' + i
    if(key in memo) return memo[key]
    if(amount === 0) return 1
    if(i=== coins.length) return 0

    let coin =coins[i]
    let total = 0
    for(let qty =0 ; qty*coin <= amount ; qty ++){

        let reminder = amount - (qty * coin)
        total += countingChange(reminder,coins,memo,i+1)
    }

    memo[key]=total
    return total
  };


  console.log(countingChange(4, [1,2,3]))