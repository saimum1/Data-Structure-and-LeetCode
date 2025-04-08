const mostFrequentChar = (s) => {


    let count={}

    let most = 0
    let char =''

    for (const i in s){
        count[s[i]] = 1 + (count[s[i]] || 0)
    }
    for(const x in count){
        if(count[x]>most){
            most =count[x]
            char = x
        }
        console.log("x",count[x])
    }return  char


  };



  console.log("mostFrequentChar",mostFrequentChar('catss'))  