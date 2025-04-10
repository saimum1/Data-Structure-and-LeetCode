def topKFrequent( nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        
        count={}
        newarr=[]
        if len(nums) <=k:
                return nums
        for i in nums:
                count[i] = 1 + count.get(i,0)
        keylists=list(count.keys())
        for x in range(len(keylists)):
                for j in range(x+1,len(keylists)):
                        if count[keylists[x]]< count[keylists[j]]:
                                keylists[x], keylists[j] =keylists[j] ,keylists[x]
        sorted_dict = {}
        for key in keylists:
            sorted_dict[key] = count[key]   
        for x in sorted_dict:
                if len(newarr) == k:
                      return newarr
                newarr.append(x)  
        return newarr                
               
print(topKFrequent([4,1,-1,2,-1,2,3],2))     