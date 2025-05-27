class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()  # Sort the array
        result = []
        print("Sorted nums:", nums)

        for i in range(len(nums) - 2):  # Need at least 3 numbers
            # Skip duplicates for i
            if i > 0 and nums[i] == nums[i - 1]:
                continue
                
            target = -nums[i]  # Find two numbers summing to -nums[i]
            left, right = i + 1, len(nums) - 1
            
            while left < right:
                curr_sum = nums[left] + nums[right]
                print(f"i={i}, left={left}, right={right}, sum={curr_sum}, target={target}")
                
                if curr_sum == target:
                    result.append([nums[i], nums[left], nums[right]])
                    print(f"Found triplet: {result[-1]}")
                    # Skip duplicates for left and right
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif curr_sum < target:
                    left += 1
                else:
                    right -= 1
        
        return result

# Test
solution = Solution()
nums = [-1,0,1,2,-1,-4]
print("Input:", nums)
print("Result:", solution.threeSum(nums))