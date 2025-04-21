class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;




const depthFirstValues = (root) => {
    // todo
  
    let current = root
    let stack = []
    stack.push(root)
    let data=[]

    for (let i =0;current !==null;i++){
        if(stack.length == 0){current = null}
        if(stack.length > 0){
                current = stack.pop()
                data.push(current.val)
                if(current.right){
                    stack.push(current.right)
                }

                if(current.left){
                    stack.push(current.left)
                }
        }}

        return data
  };



  console.log(depthFirstValues(a)) 



