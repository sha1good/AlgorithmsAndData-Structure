function MaximumSubarraySumInAnArray(array) {
  let maxValue = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    console.log(i);
    console.log(sum + "Here");

    for (let j = i; j < array.length; j++) {
      console.log(j + "J");
      sum += array[j];
      console.log(sum + "Sum");
      maxValue = Math.max(maxValue, sum);
      console.log(maxValue + "maxValue");
    }
  }

  return maxValue;
}

//Kandane Algorithms
function maxSubarraySum(arr) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
  let sum = 0;
  let n = arr.length;

  let start,
    ansStart = -1;
  let ansEnd = -1;

  for (let i = 0; i < n; i++) {
    if (sum === 0) start = i; // when they asked us to print the subarray
    sum += arr[i]; //Assuming all element in the array are positive

    if (sum > maxi) {
      maxi = sum;
      ansStart = arr[start];
      ansEnd = arr[i];
    }

    // If sum < 0: discard the sum calculated
    if (sum < 0) {
      sum = 0;
    }
  }

  // To consider the sum of the empty subarray
  // uncomment the following check:

  //if (maxi < 0) maxi = 0;

  // To consider printing the maximum sum of the subarray
  // uncomment the following check:
  // return maxi;

  return [ansStart, arr[start + 1], arr[start + 2], ansEnd];
}

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubarraySum(array));
console.log("=========================================");
console.log(MaximumSubarraySumInAnArray(array));
