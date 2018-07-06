var buddyStrings = function(A, B) {
    var a=A.split('')
    var b=B.split('')
    var flag1=0
    if(A==B){
        for(var i1=0;i1<a.length;i1++){
            for(var j1=i1+1;j1<a.length;j1++){
                if(a[i1]==a[j1])
                    

                    {flag1=1
                    return true}
            }
        }
    }

    if(flag1==0){   
    var k=0
    var m;
    for(var i=0;i<a.length;i++){
        for(var j=i;j<b.length;j++){
            if (a[j] == b[i] && i == j) {
                   
                    break;
                }

                if (a[j] == b[i]) {
                    m = a[j];
                    a[j] = a[i];
                    a[i] = m;
                    k++;
                    break;


                }
        }
    }
    var flag=(a.toString()==b.toString())

    if(k==1&&flag)
    return true
    else
    return false} 
};

var m=buddyStrings('abbaba','bbaaba')
console.log(m)