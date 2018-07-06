var kSimilarity = function (A, B) {
    var b1 = B.split('')
    var a1 = A.split('')



    
    
    var g = 10000
    fsn(a1, b1, 0,g);
    function fsn(a, b, p,g) {
        let k = p
        let m

        for (var i = 0; i < b.length; i++) {
            k++;
            for (var j = i; j < a.length; j++) {

                if (a[j] == b[i] && i == j) {
                    k--;
                    break;
                }

                if (a[j] == b[i]) {
                    m = a[j];
                    a[j] = a[i];
                    a[i] = m;
                    g = Math.min(fsn(a, b, k,g), g)
                    m = a[j];
                    a[j] = a[i];
                    a[i] = m;


                }
            }
        }
        
        return k
    }
    return g
};

var m = kSimilarity('abcac', 'baacc')
console.log(m)