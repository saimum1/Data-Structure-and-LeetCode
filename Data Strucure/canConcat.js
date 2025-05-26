const canConcat = (s, words, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  
  if (i === s.length) return true;
  
  for (let word of words) {
    if (s.startsWith(word, i)) {
      if (canConcat(s, words, i + word.length, memo)) {
        memo[i] = true;
        return true
      }
    }
  }
  
  memo[i] = false;
  return false;
};


console.log(canConcat("oneisnone", ["one", "none", "is"]))