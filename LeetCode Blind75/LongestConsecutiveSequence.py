from typing import List
def longestConsecutive( nums: List[int]) -> int:

    if not nums:
            return 0
        
        # Convert to set for O(1) lookups and remove duplicates
    num_set = set(nums)
    max_length = 0
    
    # Iterate through unique numbers
    for num in num_set:
        # Check if num is the start of a sequence
        if num - 1 not in num_set:
            current_num = num
            current_length = 1
            
            # Count consecutive numbers
            while current_num + 1 in num_set:
                current_num += 1
                current_length += 1
            # Update maximum length
            max_length = max(max_length, current_length)
    
    return max_length
       








print(longestConsecutive([2,20,4,10,3,4,5]))    