function firstOccurence(array, target) {
  let firstIndex = -1;

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      // maybe an answer, cos my firstIndex must be small as possible
      firstIndex = mid; 
      // look for smaller index on the left
      high = mid - 1;
    } else if (array[mid] < target) {
      low = mid + 1; // look on the right
    } else {
      high = mid - 1; // look on the left
    }
  }
  return firstIndex;
}

function lastOccurence(array, target) {
  let lastIndex = -1;

  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      lastIndex = mid; //  probably my answer, so I still need to keep looking to  the right to get highest index
      low = mid + 1;
    } else if (array[mid] < target) {
      low = mid + 1; // still looking to the right, cos I still need the bigger value of last Index
    } else {
      high = mid - 1; // check toward the left  since array[mid] > target
    }
  }

  return lastIndex;
}

function FirstAndLastOccurrencesInArray(array, target) {
  let first = firstOccurence(array, target);
  if (first === -1) return [-1, -1]; // NO need to look for the last index, the element is not there
  let last = lastOccurence(array, target);
  return [first, last];
}

let array = [2, 4, 6, 8, 8, 8, 11, 13];
let target = 10;


//Time Complexity: O(2*logN), where N = size of the given array.
//Reason: We are basically using the binary search algorithm twice.

//Space Complexity: O(1) as we are using no extra space.
console.log(FirstAndLastOccurrencesInArray(array, target));
