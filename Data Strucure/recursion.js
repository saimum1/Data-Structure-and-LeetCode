const sumNumbersRecursive = (numbers) => {
    // todo

    if( numbers .length === 0){
        return 0
    }

    
    let sum =numbers[0] +  sumNumbersRecursive(numbers.slice(1))
    console.log("sum",sum)
    return sum
  };
  

  console.log("sumNumbersRecursive",sumNumbersRecursive([9,8,7]))  