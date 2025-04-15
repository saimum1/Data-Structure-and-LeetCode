const sumList = (head) => {

    const current=head
    
    if(current === null) return 0

    let sum = current.val + sumList(current.next)
    

    return sum

  };





console.log("sumList is :",sumList(38))
