var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let count = {};
    
    for (let char of s) {
        if (count[char] === undefined) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    }

    for (let char of t) {
        if (count[char] === undefined || count[char] === 0) {
            return false;
        } else {
            count[char]--;
        }
    }

    return true;
};
