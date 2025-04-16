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
 //     a --> b --> c --> d --> null
 //     cur   n
 //   null <--  a <-- b <-- c <-- d 