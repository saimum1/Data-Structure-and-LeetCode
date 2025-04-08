const pairs = (elements) => {
    
    let pairs =[]
    console.log("elements",elements)
    for (let i = 0; i<elements.length; i++){
      for(let j = i+1 ; j < elements.length; j++){
        pairs.push([elements[i], elements[j]]);
        }
    }return pairs

  };


console.log("ss",pairs(['a','b','c','d']))