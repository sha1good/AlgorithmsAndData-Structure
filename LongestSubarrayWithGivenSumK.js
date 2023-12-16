function LongestSubarrayWithGivenSumK(array, k) {
  let n = array.length; // size of the array

  let presumMap = new Map();
  let prefixSum = 0;

  let maxLen = 0;

  for (i = 0; i < n; i++) {
    prefixSum += array[i];

    if (prefixSum === k) {
      maxLen = Math.max(maxLen, i + 1); //We are considering the normal max length of the array i.e normal array length
    }

    // let rem = k - prefixSum;

    // // calculate the length and update maxLen
    // if (presumMap.has(rem)) {
    //   let newLen = i - presumMap.get(rem);
    //   maxLen = Math.max(maxLen, newLen);
    // }
    // [2, 3, 5, 1, 9];
    
   //// update the map checking the conditions if the presumMap does not have  prefixSum
    if (!presumMap.has(prefixSum)) {
      presumMap.set(prefixSum, i);
    }
  }

  return maxLen;
}


function LongestSubarrayWithGivenSumKWithBruteForce(array, k){
     
    let  sum = 0;
    let  maxLen = 0;

    for(let i=0; i < array.length; i++){

        for(j=i; j < array.length; j++){
            sum += array[j]

            if(sum === k){
             maxLen =  Math.max(maxLen, j - i + 1) //We are considering the normal max length of the array i.e normal array length
            }
        }
    }

     return maxLen;
}

let array = [2, 3, 5, 1, 9];
let k = 10;

 

console.log(LongestSubarrayWithGivenSumK(array,k));
console.log(LongestSubarrayWithGivenSumKWithBruteForce(array, k))
