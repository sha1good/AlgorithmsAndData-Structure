var MAX = 10000;
 
var hashTable = Array(MAX).fill(0);
 
// function to find minimum operations
function minOperations(arr, n)
{
    // sort array
    arr.sort((a,b)=>a-b);
 
    // prepare hash of array
    for (var i = 0; i < n; i++)
        hashTable[arr[i]]++;
 
    var res = 0;
    for (var i = 0; i < n; i++) {
        if (hashTable[arr[i]]) {
            for (var j = i; j < n; j++)
                if (arr[j] % arr[i] == 0)
                    hashTable[arr[j]] = 0;
            res++;
        }
    }
 
    return res;
}

// Driver program
var arr = [ 4, 6, 2, 8, 7, 21, 24, 49, 44 ];
var n = arr.length;
console.log( minOperations(arr, n));