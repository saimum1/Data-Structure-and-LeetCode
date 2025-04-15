
const intersection = (a, b) => {
    // todo\

    let newArr=[]
    const sets = new Set(a)
    for(let i of b){
        // console.log("i",i)
        if(sets.has(i)){
            newArr.push(i)
        }
    }
    return newArr
  };


  console.log("intersection",intersection([4,2,1,6], [3,6,9,2,10]))