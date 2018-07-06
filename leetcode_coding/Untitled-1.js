var peakIndexInMountainArray = function(A) {
    var l=0;
    var r=A.length;
    var mid;
    var i=0
    while(l<r){
        i++
        mid = parseInt((l+r)/2)
        if(A[mid]<A[mid-1]&&A[mid]>A[mid+1])
            {r=mid
            console.log(r+'r')}
        if(A[mid]>A[mid-1]&&A[mid]<A[mid+1])
            {l=mid
            console.log(l+'l')}
        if(A[mid]>A[mid-1]&&A[mid]>A[mid+1])
                break;
        console.log(r)
        console.log(l)
    }
    return mid
};

var m=peakIndexInMountainArray([0,1,3,4,5,8,9,10,11,23,45,3,2,1])

console.log(m)