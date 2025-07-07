// const sumList = (head) => {

//     const current=head
    
//     if(current === null) return 0

//     let sum = current.val + sumList(current.next)
    

//     return sum

//   };





// console.log("sumList is :",sumList(38))



class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7


const sumList = (head) => {
    if(head === null)return 0
    return head.val + sumList(head.next)
  };



console.log(sumList(a)) ;