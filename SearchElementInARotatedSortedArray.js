function SearchElementInARotatedSortedArray(array, target) {
  let low = 0;
  let high = array.length - 1;
  // Identify the sorted array from mid
  // Eliminate  either the left half or right half

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // if mid points to the target
    if (array[mid] === target) return mid;
    // if left part is sorted
    if (array[low] <= array[mid]) {
      if (array[low] <= target && target <= array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // if right part is sorted
    else {
      if (array[mid] <= target && target <= array[high]) {
        // element exists
        low = mid + 1;
      } else {
        // element does not exist
        high = mid - 1;
      }
    }
  }

  return -1;
}

let array = [4, 5, 6, 7, 0, 1, 2, 3];
let target = 0;

//Time Complexity: O(logN), N = size of the given array.
//Reason: We are using binary search to search the target.

//Space Complexity: O(1)
//Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).
console.log(SearchElementInARotatedSortedArray(array, target));
