

const pairSum = (numbers, targetSum) => {

    let tempNums={}
  
    for(let i=0;i<numbers.length;i++){
        let num=numbers[i]
        let complemet = targetSum - num
        if(complemet in tempNums){
            return [i,tempNums[complemet]]
        }

        tempNums[num]=i
    }






  };

console.log("pairSum",pairSum([9,9],18))

