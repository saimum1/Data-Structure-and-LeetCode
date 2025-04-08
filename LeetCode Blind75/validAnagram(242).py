
def isAnagram( s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False

        countS,countT ={} ,{}

        for i in range(len(s)):
                countS[s[i]] = 1 + countS.get(s[i],0)
                countT[t[i]] = 1 + countT.get(t[i],0)

        print("countS",countS)        
        print("countT",countT)        

        for c in countS:
            if countS[c] != countT.get(c,0):
               return False 
        return True   
        
print("result",isAnagram('cararce','racecar'))