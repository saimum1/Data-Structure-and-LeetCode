# 387. First Unique Character in a String
# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

def firstUniqChar(s) :
        most =0
        cha = ''
        dic={}
        findex={}
        rindex=len(s)

        for i in range(len(s)):
            c=s[i]
            if c not in findex :
                  findex[c]=i
            dic[c]= 1 + dic.get(c,0)
            if dic[c] > most:
                most=dic[c]
                cha=c 

        for x in dic:
              if dic[x]==1 and findex[x] < rindex:
                    rindex = findex[x]
                    cha=x
                    
        return rindex if dic[cha] ==1 else -1          
            


        


print(firstUniqChar('loveleetcode'))       