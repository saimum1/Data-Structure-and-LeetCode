const pairProduct = (numbers, targetProduct) => {
  
    let tempNums={}
  
    for(let i=0;i<numbers.length;i++){
        let num=numbers[i]
        let complemet = targetProduct / num
        if(complemet in tempNums){
            return [i,tempNums[complemet]]
        }

        tempNums[num]=i
    }






  };

console.log("pairProduct",pairProduct([3, 2, 5, 4, 1], 10)  )

