var lengthOfLongestSubstring = function(s) {
    subString=[]
    maxlen=0
    for(let i=0;i<s.length;i++){
        while (subString.includes(s[i])) {
            subString.shift();
        }
        subString.push(s[i])
        maxlen=Math.max(maxlen,subString.length)
    } 
return maxlen
};