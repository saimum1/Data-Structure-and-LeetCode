const reverseList = (head) => {
    // todo
  let prev = null
  let current = head
  
  while (current !== null){
    const next =current.next
    current.next =prev
    prev = current
    current=next
  }
  return prev
  };


//     
 //   null -->  a  -->  b --> c --> d --> null
 //   prev --  cur --  n
 //   null <--  a <-- b <-- c <-- d 