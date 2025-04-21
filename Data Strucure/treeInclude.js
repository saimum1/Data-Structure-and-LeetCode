class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  
  
  
  const treeIncludes = (root, target)  => {
      // todo
    
      let current = root
      let stack = [root]
      let hasset=new Set()
      if(root === null){
        return false
      }


      while(stack.length > 0){
        current = stack.shift()
        hasset.add(current.val)
           if(current.left){
            stack.push(current.left)}   
            if(current.right){
                stack.push(current.right) }
      }

        return hasset.has(target)
    };
  
  
  
    console.log(treeIncludes(a, "e"))
  
  
  
  