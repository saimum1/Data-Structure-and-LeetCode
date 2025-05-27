def twoSum (numbers ,target):
        memo={}

        if len(numbers) <= 1 :
            return numbers


        for i in range(len(numbers)):
              num=numbers[i]
              complementNum=target-num
              if complementNum in memo:
                    return sorted([i+1,memo[complementNum]+1])
              memo[num]=i
              print(i)

print(twoSum([2,7,11,15],9))        