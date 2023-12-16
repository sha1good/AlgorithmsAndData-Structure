function SearchSingleElementInASortedArrayBruteForceApproach1(array) {
  let mapKey;
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      map[array[i]]++;
    } else {
      map[array[i]] = 1;
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      mapKey = key;
    }
  }

  return mapKey;
}

function SearchSingleElementInASortedArrayBruteForceApproach2(array) {
  let n = array.length; // Size of the array

  if (array.length === 1) return array[0];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      //Check for the first Index
      if (array[i] !== array[i + 1]) {
        return array[i];
      }
    }
    //Check for the last index
    else if (i === n - 1) {
      if (array[i] !== array[i - 1]) {
        return array[i];
      }
    } else {
      if (array[i] !== array[i - 1] && array[i] !== array[i + 1]) {
        return array[i];
      }
    }
  }
  //Dummy return statement
  return -1;
}

function SearchSingleElementInASortedArrayOptimalSolution(array) {
  let n = array.length;
  if (n === 1) return array[0]; // Check for the edge cases, the first index
  if (n === n - 1) return array[n - 1]; // check for the last index
  let low = 1;
  let high = n - 2;

  //check for the remaining array from 1 to n-2

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // If arr[mid] is the single element:
    if (array[mid] !== array[mid - 1] && array[mid] !== array[mid + 1]) {
      return array[mid];
    }

    // We are in the left: i.e  standing on old and even index respecrively
    if (
      (mid % 2 === 1 && array[mid] === array[mid - 1]) ||
      (mid % 2 === 0 && array[mid] === array[mid + 1])
    ) {
      // Eliminate the left half:
      low = mid + 1;
    } else {
      // Eliminate the right index;
      high = mid - 1;
    }
  }

  return -1;
}

let array = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];

//O(NlogN)
console.log(SearchSingleElementInASortedArrayBruteForceApproach1(array));

console.log("========================================");

//Time Complexity: O(N), N = size of the given array.
//Reason: We are traversing the entire array.

//Space Complexity: O(1) as we are not using any extra space.
console.log(SearchSingleElementInASortedArrayBruteForceApproach2(array));

//If the array size is 1.
//If ‘mid’ points to 0 i.e. the first index.
//If ‘mid’ points to n-1 i.e. the last index.
//Note: At the start of the algorithm, we address the above edge cases without
//requiring separate conditions during the check for arr[mid] inside the loop.
//And the search space will be from index 1 to n-2 as indices 0 and n-1 have already been checked.

console.log("========================================");
//Time Complexity: O(logN), N = size of the given array.
//Reason: We are basically using the Binary Search algorithm.

//Space Complexity: O(1) as we are not using any extra space.
console.log(SearchSingleElementInASortedArrayOptimalSolution(array));
