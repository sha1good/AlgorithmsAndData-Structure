function MinimumInRotatedSortedArrayBruteForce(array) {
  let mini = Infinity;

  for (let i = 0; i < array.length; i++) {
    mini = Math.min(mini, array[i]);
  }

  return mini;
}

function MinimumInRotatedSortedArrayOptimalSolution(array) {
  let low = 0;
  let high = array.length - 1;
  let mini = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // if the left part is sorted
    if (array[low] <= array[mid]) {   
      //Keep the minimum
      mini = Math.min(mini, array[low]);
      low = mid + 1;
    } else {
       //if  the right part is sorted
       mini = Math.min(mini, array[mid]);
       high = mid - 1;
    }
  }

  return mini;
}

let array = [4, 5, 1, 2, 3];
//Time Complexity: O(N), N = size of the given array.
//Reason: We have to iterate through the entire array to check if the target is present in the array.

//Space Complexity: O(1)
//Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).
console.log(MinimumInRotatedSortedArrayBruteForce(array));

console.log("===========================================");
//Time Complexity: O(logN), N = size of the given array.
//Reason: We are basically using binary search to find the minimum.

//Space Complexity: O(1)
//Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).
console.log(MinimumInRotatedSortedArrayOptimalSolution(array));
