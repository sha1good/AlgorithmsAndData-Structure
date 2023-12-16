function FindOutHowManyTimesTheArrayHasBeenRotatedBruteForceApproach(array) {
  let result = Infinity;
  let indexOfMinimumElement = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < result) {
      result = array[i];
      indexOfMinimumElement = i;
    }
  }
  return indexOfMinimumElement;
}

function FindOutHowManyTimesTheArrayHasBeenRotatedOptimalApproach(array) {
  let low = 0;
  let high = array.length - 1;
  let result = Infinity;
  let indexOfMinimumElement = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // If left part is sorted:
    if (array[low] <= array[mid]) {
      // Keep the minimum:
      if (array[low] < result) {
        result = array[low];
        indexOfMinimumElement = low;
      }
      low = mid + 1; //  Eliminate the left half
    } else {
      //// If right part is sorted:
      if (array[mid] < result) {
        result = array[mid];
        indexOfMinimumElement = mid;
      }
      high = mid - 1;
    }
  }

  return indexOfMinimumElement;
}

let array = [4, 5, 1, 2, 3];

//Intuition: Just get the  index of the smallest element in the rotated array
console.log(FindOutHowManyTimesTheArrayHasBeenRotatedBruteForceApproach(array));
console.log("==========================")
//Time Complexity: O(logN), N = size of the given array.
//Reason: We are basically using binary search to find the minimum.

//Space Complexity: O(1)
//Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).
console.log(FindOutHowManyTimesTheArrayHasBeenRotatedOptimalApproach(array));
