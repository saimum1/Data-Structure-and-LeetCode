def groupAnagrams(strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """

        gro={}

        for i  in strs:
                print(i)
                freq =[0] * 26
                for y in i:
                        freq[ord(y) - ord('a')] += 1
                freq_str = '#'.join(str(count) for count in freq)

                if freq_str in gro:
                        gro[freq_str].append(i)
                else:
                        gro[freq_str] =[i]  
        return list(gro.values())  

print("groupAnagrams",groupAnagrams(["eat","tea","tan","ate","nat","bat"]))      