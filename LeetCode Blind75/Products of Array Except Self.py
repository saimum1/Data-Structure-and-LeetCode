from typing import List
def productExceptSelf(nums: List[int]) -> List[int]:

        n=len(nums)
        result=[1] * n
        
        leftside =1
        for i in range(n):
                result[i]=leftside
                leftside *= nums[i]

        print(result)  


        rightside =1
        for y in range(n-1,-1,-1):
                result[y] *=rightside
                rightside *= nums[y]

        print(result)        




        return result




print(productExceptSelf([1, 3, 4, 6]))        