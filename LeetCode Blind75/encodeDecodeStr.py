from typing import List

def encode(strs: List[str]) -> str:
    res=''
    for i in strs:
        res += str(len(i) ) + '#' + i
    return res    

    encoded = '#'.join(str(i) for i in strs)
    print(encoded)  # optional debug
    return encoded  # important: return the result

print("encode", encode(["eat", "tea", "tan", "ate", "nat", "bat"]))