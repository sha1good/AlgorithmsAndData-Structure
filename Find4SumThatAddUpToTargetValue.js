function Find4SumThatAddUpToTargetValueWithOptimalApproach(array) {
  if (array.length === 0) return;

  array = array.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i > 0 && array[i] === array[i - 1]) continue;

    for (let j = i + 1; j < array.length; j++) {
      if (j !== i+ 1 && array[j] === array[j - 1]) continue;  // Not at the same index as i

      let k = j + 1;
      let L = array.length - 1;

      while (k < L) {
        let sum = array[i] + array[j] + array[k] + array[L];
        if (sum < 0) {
          k++;
        } else if (sum > 0) {
          L--;
        } else {
          let temp = [array[i], array[j], array[k], array[L]];
          result.push(temp);
          k++;
          L--;

          while (k < L && array[k] === array[k - 1]) k++;
          while (k < L && array[L] === array[L + 1]) L--;
        }
      }
    }
  }

  return result;
}

let array = [1,0,-1,0,-2,2];

// Time Complexity: O(NlogN)+O(N3), where N = size of the array.
//Reason: Here, we are mainly using 4 nested loops.
//And inserting Quads into the set takes O(log(no. of unique Quad)) time complexity.
//And we are considering the time complexity of sorting as we are just sorting all elements in the array.

//Space Complexity: O(no. of quadruplets), This space is only used to store the answer. 
//We are not using any extra space to solve this problem. 
//So, from that perspective, space complexity can be written as O(1)
console.log(
  "========================= With WithOptimalApproach ======================="
);
console.log(Find4SumThatAddUpToTargetValueWithOptimalApproach(array));
