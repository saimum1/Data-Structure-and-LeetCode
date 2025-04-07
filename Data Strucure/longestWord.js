const longestWord = (sentence) => {
    // todo
    let longestWord =""
    let words =sentence?.split(" ")
    for(const i of words){
      if(i.length >= longestWord.length){
        longestWord = i
      }
    }return longestWord
  };



  console.log("longestWord is :",longestWord("Hello I am a Software Engineer"))