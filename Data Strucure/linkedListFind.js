// const linkedListFind = (head, target) => {

//     let current =head
//     let count = 0

//   for (let i=0 ; i<index;i++){
//     if(current === null) return null
//     count = count +1
//     current =current.next
    
//   }

//     return current.val



//   };



const linkedListFind = (head, target) => {
   if(head === null) return false
   if(head.val === target) return true
   return linkedListFind(head.next, target)
  };


  console.log("linkedListFind is :",linkedListFind(38))  
