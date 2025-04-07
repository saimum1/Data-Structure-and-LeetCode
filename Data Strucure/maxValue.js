const maxValue = (nums) => {
    let maxValue = -1/0
  
    for(let num of nums){
      if(num > maxValue){
        maxValue =num
      }
    }return maxValue
  };
  

  console.log("max number is :",maxValue([4,2,5,1,6,7]))