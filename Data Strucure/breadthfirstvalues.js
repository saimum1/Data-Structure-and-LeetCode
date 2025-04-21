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
  
  
  
  
  const breadthFirstValues = (root) => {
      // todo
    
      let current = root
      let stack = [root]
      let data=[]
      if(root === null){
        return []
      }




      while(stack.length > 0){
        current = stack.shift()
        data.push(current.val)
           if(current.left){
            stack.push(current.left)}   
            if(current.right){
                stack.push(current.right) }
      }

        return data
    };
  
  
  
    console.log(breadthFirstValues(a)) 
  
  
  
  