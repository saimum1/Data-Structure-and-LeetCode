const tokenReplace = (s, tokens) => {
  // todo
  let output=[]
  let i =0
  let j =1

  while(i < s.length){
    if(s[i] !== '$'){
    output.push(s[i])
     i=i+1
     j=i+1
    }else if(s[j] !== '$'){
        j=j+1
    }else{
        let key = s.slice(i , j+1)
        output.push(tokens[key])

        i=j+1
        j=i+1
    }
  }

   return output.join('')
};



const tokens = {
  $LOCATION$: "park",
  $ANIMAL$: "dog",
};


console.log(tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens))
tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens)