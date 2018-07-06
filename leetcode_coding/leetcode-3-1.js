var lengthOfLongestSubstring = function (s) {
    var substr = ''
    for (var i = 0; i < s.length; i++) {
        var j = i
        var newsubstr = s[j]
        var end = false
        while (!end) {
            for (var k = 0; k < newsubstr.length; k++) {
                if (newsubstr[k] == s[j + 1]) {
                    end = true
                    break
                }
            }
            if (!end&&s[j+1]!==undefined) {
                newsubstr = newsubstr + s[j + 1]
                j = j + 1
            }
            if(s[j + 1]==undefined){
                end = true
            }
        }

        if (end) {
            if (newsubstr.length > substr.length) {
                substr = newsubstr
            }
        }
        
    }
    return substr.length

};

var b=
`
abcdae
`;



var a = lengthOfLongestSubstring(b)
console.log(a)