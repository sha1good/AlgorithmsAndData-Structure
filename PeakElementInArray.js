function PeakElementInArray(array) {
  let n = array.length;
  if (n === 1) return 0; // 0 index if we are have only one array element
  if (array[0] > array[1]) return 0; // e.g if arrray 0 > array at 1  i.e 5 > 4 > 3
  if (array[n - 1] > array[n - 2]) return n - 1;

  let low = 0;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
      // that means it is a peak
      return mid;
    }

    // If we are in the left:
    //Eliminate the left
    if (array[mid] > array[mid - 1]) low = mid + 1;
    //if  are the right: eliminate the right  hand side
    else high = mid + 1;
  }

  // Dummy return statement
  return -1;
}

let array = [1,2,3,4,5,6,7,8,5,1];
//Formally, if ‘arr[i]’ is the peak element, ‘arr[i – 1]’ < ‘arr[i]’ and ‘arr[i + 1]’ < ‘arr[i]’.
//Time Complexity: O(logN), N = size of the given array.
//Reason: We are basically using the Binary Search algorithm.

//Space Complexity: O(1) as we are not using any extra space.
console.log(PeakElementInArray(array));
