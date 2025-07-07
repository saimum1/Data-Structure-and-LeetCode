def intersection( nums1, nums2) :

    setA=set(nums1)
    newArr=[]
    for i in setA:
        if i in nums2:
            newArr.append(i)
        print('i',i)

    return newArr




print( intersection([1,2,2,1,4],[2,2]))
