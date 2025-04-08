const intersection = (a, b) => {
    // todo\

    let newArr=[]

    for(let i =0 ;i<a?.length ; i ++){
        console.log("a[i]",a[i] , b[i])
        let duplicate=newArr?.includes(a[i])
        let getv=b?.includes(a[i])
        if(getv){
            newArr.push(a[i])
        }
    
    }
    return newArr
  };


  console.log("intersection",intersection([4,2,1,6], [3,6,9,2,10]))