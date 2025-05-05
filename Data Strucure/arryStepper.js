const arrayStepper = (nums,memo={},i=0) => {
    // todo
    if(i in memo) return memo[i]
    if(i >= nums.length -1) return true

    let maxstep = nums[i]
    for(let step =1 ; step <= maxstep ;step++){

        if(arrayStepper(nums , memo , i+step) === true){
            memo[i] = true
            return true

        }

    }memo[i] = false
    return false
  };

console.log(arrayStepper([2, 4, 2, 0, 0, 1])
)