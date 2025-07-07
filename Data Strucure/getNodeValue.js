// const getNodeValue = (head, index) => {
//     // todo

//     let current =head
//     let count = 0

//     let i =0
//     while(i<=index){
//         current = current.next
//         i++
//     }

//     return current
//   };


  const getNodeValue = (head, index,count=0) => {
    if(head === null)return null
    if(count ===index) return head.val
    return getNodeValue(head.next,index,count+=1)
  };