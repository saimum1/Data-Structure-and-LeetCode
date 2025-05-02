
const minChange = (amount, numbers) => {
    // todo
    return  _minChange  (amount, numbers) === Infinity? -1 :_minChange  (amount, numbers)

   
  };

const _minChange = (amount, numbers ,memo={}) => {
    // todo


    if(amount===0) return 0
    if(amount < 0) return Infinity
    if(amount in memo) return memo[amount]
    let min= Infinity
    for(let i of numbers){
        const minCoin= 1 + _minChange(amount-i, numbers ,memo)
        min =Math.min(min,minCoin)
    }

    return memo[amount]=min
   
  };
  
console.log(minChange(8, [1, 5, 4, 12]))  