const maxValue = (nums) => {
    let maxValue = -1/0
  
    for(let num of nums){
      if(num > maxValue){
        maxValue =num
      }
    }return maxValue
  };
  