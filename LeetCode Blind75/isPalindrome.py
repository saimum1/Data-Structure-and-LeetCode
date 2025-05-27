class Solution:
    def isPalindrome(self, s: str) -> bool:
        l,r = 0 ,len(s)-1

        while l < r:
            while l < r and not self.alphanum( s[l]):
                l+=1
            while r > l and not self.alphanum(s[r]):
                r-=1

            if s[l].lower() !=  s[r].lower()  :
                return False
            l=l+1
        
            r=r-1

        return True                



    def alphanum(self, sx):
        return ('A' <= sx <= 'Z' or 'a' <= sx <= 'z' or '0' <= sx <= '9')

        