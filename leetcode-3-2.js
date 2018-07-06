var lengthOfLongestSubstring = function (s) {
    var substr = '';
    var usedChar = {};
    var start = 0;
    var maxLength = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] in usedChar && start <= usedChar[s[i]])
            start = usedChar[s[i]] + 1
        else 
          {  maxLength = Math.max(maxLength, i - start + 1)}

        usedChar[s[i]] = i
    }
    return maxLength
}
var b = 'tmmzuxt'




var a = lengthOfLongestSubstring(b)
console.log(a)