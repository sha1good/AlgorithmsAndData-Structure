


const areAlmostEqual = function(s1, s2) {    
    let firstDiff;
    let secondDiff;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (!firstDiff) {
                firstDiff = s1[i] + s2[i];    
            } else if(!secondDiff) {
                secondDiff = s2[i] + s1[i];    
            } else {
                return false;
            }
        }
    }
    
    return firstDiff === secondDiff;
};


console.log(areAlmostEqual("bank","kanb"));
console.log(areAlmostEqual('Night', 'Thing'));
