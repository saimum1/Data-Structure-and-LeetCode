from typing import List

def encode(strs: List[str]) -> str:
    res=''
    for i in strs:
        res += str(len(i) ) + '#' + i
    return res    



def decode( s: str) -> List[str]:

    red=[]
    num=0
    x=2  
    i=0
    while i < len(s):
        num=int(s[i])
        word=s[x:num+x]
        x +=num+2
        i+=num+2
        red.append(str(word))  
    # print(red)    
    return red








en=encode(["neet","code4","love","you"])

print("encode",en)
print("decode", decode(en))