class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  
  const a = new Node(5);
  const b = new Node(11);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(14);
  const f = new Node(12);
  
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  
  
  
  const treeMinValue = (root) => {
      // todo
    
      let current = root
      let stack = [root]
      let minVal=1/0
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

      console.log("data",data)
        for(i=0;i<data.length;i++){

            if(data[i] < minVal){
                minVal =data[i]
            }
        }
    
        return minVal
    };
  
  
  
    console.log(treeMinValue(a)) 
  
  
  
  