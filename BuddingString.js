var buddyStrings = function(A, B) {
    if(A.length!=B.length || A.length<2 || B.length<2 ) return false;
    
    if(A==B) {
        let setA = new Set(A.split(''));
        return setA.size<A.length;
    }
    
    let index = [];
    for(let i =0; i<A.length; ++i) {
        if(A[i]!=B[i]) index.push(i);
    }
    if(index.length!=2) return false;
    
    return A[index[0]]==B[index[1]] && A[index[1]]==B[index[0]];
};

console.log(buddyStrings("ab","ab"));