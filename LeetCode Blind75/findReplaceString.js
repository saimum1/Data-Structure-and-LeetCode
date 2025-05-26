const tokenReplace = (s, wordr, tword, index) => {
  let output = [];
  let i = 0;
  while (i < s.length) {
    if (i === index && s.slice(i, i + wordr.length) === wordr) {
      output.push(tword);
      i += wordr.length;
    } else {
      output.push(s[i]);
      i++;
    }
  }
  return output.join('');
};

var findReplaceString = function(s, indices, sources, targets) {
  let we = s.slice(); // Copy string
  console.log("Copy:", we);
  let reps = [];
  for (let i = 0; i < indices.length; i++) {
    reps.push([indices[i], sources[i], targets[i]]);
  }
  reps.sort((a, b) => b[0] - a[0] || b[1].length - a[1].length);

  for (let [index, wordr, tword] of reps) {
    if (s.slice(index, index + wordr.length) === wordr) { // Check original string
      console.log(`Replace "${wordr}" -> "${tword}" at ${index}`);
      we = tokenReplace(we, wordr, tword, index);
    } else {
      console.log(`No match for "${wordr}" at ${index}`);
    }
  }
  console.log("Result:", we);
  return we;
};




const s = "abcd";
const indices = [0, 2];
const sources = ["a", "cd"];
const targets = ["eee", "ffff"];
console.log("Result:", findReplaceString(s, indices, sources, targets));