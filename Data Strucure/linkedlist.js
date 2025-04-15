const linkedListValues = (head) => {
    

    const values=[]
    fillvalues(head,values)

    return values

  };



const fillvalues=(head,values)=>{
    if(head === null) return
    values.push(head.val)
    fillvalues(head.next,values)

}


console.log("linkedListValues is :",linkedListValues('a'))
