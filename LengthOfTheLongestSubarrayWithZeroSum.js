function LengthOfTheLongestSubArrayWithZeroSumBruteForceApproach(array) {
  if (array.length === 0) return;

  let prefixMap = new Map();

  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum === 0) {
      maxLen = i + 1;
    } else if (prefixMap.has(sum)) {
      maxLen = Math.max(maxLen, i - prefixMap.get(sum));
    } else {
      prefixMap.set(array[i], i);
    }
  }

  return maxLen;
}


let array = [9, -3, 3, -1, 6, -5];

//Time Complexity of ONlogN 
//Reason: We are transversing through the array once and also we using map to store sum which is logarimithics of N
//Space Complexity :  O(N)
console.log(LengthOfTheLongestSubArrayWithZeroSumBruteForceApproach(array));
