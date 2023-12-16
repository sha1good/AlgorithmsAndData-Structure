function firstOccurence(array, target) {
  let first = -1;
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      first = mid; // probably my first index solution
      // so , i need to keeo checking to the left to get the most smallest first index
      high = mid - 1;
    } else if (array[mid] < target) {
      low = mid + 1; //  keep checking to  the  right, since the array[mid] is less than the target
    } else {
      high = mid - 1; // keep checking to  the  left, since the array[mid] is greater than the target
    }
  }

  return first;
}

function lastOccurence(array, target) {
  let last = -1;
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      last = mid; // probably my first index solution
      // so , i need to keep checking to the  right to get the most largest of last Occurence of index of my target
      low = mid + 1;
    } else if (array[mid] < target) {
      low = mid + 1; //  keep checking to  the  right, since the array[mid] is less than the target
    } else {
      high = mid - 1; // keep checking to  the  left, since the array[mid] is greater than the target
    }
  }

  return last;
}

function CountOccurrencesInSortedArray(array, target) {
  let count = 0;
  let first = firstOccurence(array, target);
  if (first === -1) return 0;
  let last = lastOccurence(array, target);
  count = last - first + 1;
  return count;
}

let array = [1, 1, 2, 2, 2, 2, 2, 3];
let target = 2;


//Time Complexity: O(2*logN), where N = size of the given array.
//Reason: We are basically using the binary search algorithm twice.

//Space Complexity: O(1) as we are using no extra space.
console.log(CountOccurrencesInSortedArray(array, target));
