// const mostFrequentChar = (s) => {


//     let count={}

//     let most = 0
//     let char =''

//     for (const i in s){
//         count[s[i]] = 1 + (count[s[i]] || 0)
//     }
//     for(const x in count){
//         if(count[x]>most){
//             most =count[x]
//             char = x
//         }
//         console.log("x",count[x])
//     }return  char


//   };


const mostFrequentChar = (s) => {
    let max = 0, char = '', counts = {},index={};
    for (const c in s) {
        let x = s[c]
        if(!(x in index)) index[x]=c
        counts[x] = 1 + (counts[x] || 0)
        if(counts[x] > max || (counts[x] === max && index[x] < index[char])){
            max = counts[x]
            char = x
        }
    }
    return char;
};





  console.log("mostFrequentChar",mostFrequentChar('mississippi'))  