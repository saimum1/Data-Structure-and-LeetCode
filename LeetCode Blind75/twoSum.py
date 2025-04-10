
def twoSum( nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """

    temp={}

    for i in range(len(nums)):
        print("i",i)
        num=nums[i]
        complement=target - num
        if complement in temp :
            return [i,temp[complement]]
        temp[num]=i


        

print(twoSum([2,7,11,15],9))    