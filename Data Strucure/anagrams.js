// const anagrams = (s1, s2) => {
//     // todocou
//     let countS1={}
//     let countS2={}

//     if(s1.length !== s2.length){
//         return false
//     }

//     for(const i in s1){
//         // console.log("i",s1[i])
//         countS1[s1[i]] = 1 + (countS1[s1[i]] || 0)
//         countS2[s2[i]] = 1 + (countS2[s2[i]] || 0)
//     }

//     // console.log("countS1",countS1)
//     // console.log("countS2",countS2)

//     for(const c in countS1){

//         // console.log("compare",countS1[c])
//         console.log("compare",c,countS1[c], countS2[c])
//         if(countS1[c] !== countS2[c]){

            
//             return false
//         }
//     }
//     return true
//   };



const anagrams = (s1, s2) => {
    if(s1.length !== s2.length)return false
    let [c1,c2]=[{},{}]

    for(const i in s1){
        c1[s1[i]] =1 +  (c1[s1[i]] || 0)
        c2[s2[i]] =1 +  (c2[s2[i]] || 0)
    }

    for(const i in s1){
        if(c1[s1[i]] !== c2[s1[i]]){
            return false
        }
    }return true

}

console.log("anagrams",anagrams('cats', 'tocs'))




