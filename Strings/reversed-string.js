var reverseString = function(s) {
    left=0
    right=s.length-1
    middle=Math.floor(right-left/2)
    while(right!==middle){
        let temp=s[right]
        s[right]=s[left]
        s[left]=temp
        right--;
        left++;

    }    
    return s;
};