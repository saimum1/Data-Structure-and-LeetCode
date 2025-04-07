def duplicateChecker(n):
    hashset=set()

    for i in n:
        if i in hashset:
            return True
        hashset.add(i)
    return False



print("result",duplicateChecker([1,4,5,1,5,6,7]))